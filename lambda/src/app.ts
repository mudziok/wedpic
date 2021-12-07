import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import S3 from "aws-sdk/clients/s3"

const validateAlbumName = (name: string): string => {
  /* this regex tests if a string is a single
  word or two words connected with a slash */
  if (/^\w+\/?\w*$/.test(name)) return name;
  return "default"
};

const getUploadPost = (filename: string, contentType: string): Promise<S3.PresignedPost> => {
  const s3 = new S3();

  const params: S3.PresignedPost.Params = {
    Expires: 60,
    Bucket: process.env.BUCKET_NAME,
    Conditions: [
      ["content-length-range", 100, 2000000]
    ],
    Fields: {
      "Content-Type": contentType,
      key: filename
    }
  }

  return new Promise(async (resolve, reject) => {
    s3.createPresignedPost(params, async (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true
};

exports.lambdaHandler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {    
  const albumName = validateAlbumName(event.queryStringParameters?.album ?? "");

  const actionId = Date.now();
  const filename = `${albumName}/${actionId}.png`;

  try {
    const presignedPost = await getUploadPost(filename, "image/png");

    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({...presignedPost})
    };
  } catch (e) {
    return {
      statusCode: 500,
      headers: headers
    };
  };
};
