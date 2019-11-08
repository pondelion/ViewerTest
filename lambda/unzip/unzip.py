import json
import os
import boto3
import zipfile


BUCKET = 'BUCKET_NAME'
KEY = 'FILENAME'
SOURCE = f's3://{BUCKET}/{KEY}'
OUTDIR = f's3://{BUCKET}/'


def lambda_handler(event, context):
    s3_client = boto3.client('s3')
    tmp_zip = '/tmp/tmpfile.zip'
    s3_client.download_file(BUCKET, KEY, tmp_zip)
    zfile = zipfile.ZipFile(tmp_zip)

    file_list = [(
        file_name,
        '/tmp/' + os.path.basename(file_name),
        file_name.replace('viewer-test/build/', '')
    ) for file_name in zfile.namelist()]

    for file_name, local_path, s3_key in file_list:
        print(f'{file_name} / {local_path} / {s3_key}')
        data = zfile.read(file_name)
        with open(local_path, 'wb') as f:
            f.write(data)
            del(data)

        if '.html' in file_name:
            s3_client.upload_file(local_path, BUCKET, s3_key, ExtraArgs={'ContentType': 'text/html'})
        else:
            s3_client.upload_file(local_path, BUCKET, s3_key)

        os.remove(local_path)

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
