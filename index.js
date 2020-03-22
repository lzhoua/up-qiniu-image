var qiniu = require("qiniu");

qiniu.conf.ACCESS_KEY = 'qOdwaI_qC6QEUX3YqWajFXf0z7ggfi-f_2naa92c';
qiniu.conf.SECRET_KEY = 'rzvK4Sus0TGeFAtWSZcEe_pNY9-yyym9HS4dPhPZ';
 
// 要上传的空间
const bucket = 'sanye-image'
 
// 文件前缀
const prefix = 'image/activity/'
 
// 生成上传文件的 token
const token = (bucket, key) => {
    
    const policy = new qiniu.rs.PutPolicy({ isPrefixalScope: 1, scope: bucket + ':' + key })
 
 
    return policy.uploadToken()
}
 
const config = new qiniu.conf.Config()
 
const upload_file = (file_name, file_path) => {
    // 保存到七牛的地址
    const file_save_path = prefix + file_name
 
    // 七牛上传的token
    const up_token = token(bucket, file_save_path)
 
    const extra = new qiniu.form_up.PutExtra()
 
    const formUploader = new qiniu.form_up.FormUploader(config)
 
    // 上传文件
    formUploader.putFile(up_token, file_save_path, file_path, extra, (err, ret) => {
        if (!err) {
            // 上传成功， 处理返回值
            console.log(ret);
        } else {
            // 上传失败， 处理返回代码
            console.error(err);
        }
    });
}
 
upload_file('test.png', './image/avator.jpeg')