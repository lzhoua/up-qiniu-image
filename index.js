// var qiniu = require("qiniu");

// qiniu.conf.ACCESS_KEY = 'qOdwaI_qC6QEUX3YqWajFXf0z7ggfi-f_2naa92c';
// qiniu.conf.SECRET_KEY = 'rzvK4Sus0TGeFAtWSZcEe_pNY9-yyym9HS4dPhPZ';
 
// // 要上传的空间
// const bucket = 'sanye-image'
 
// // 文件前缀
// const prefix = 'image/activity/'
 
// /**
//  * 生成上传文件的 token
//  * @param {*} bucket 要上传的空间
//  * @param {*} key 保存到七牛的地址
//  */
// function getQiniuToken(bucket, key){
// 	const policy = new qiniu.rs.PutPolicy({ isPrefixalScope: 1, scope: bucket + ':' + key })
// 	return policy.uploadToken()
// }

// /**
//  * 获取config
//  * @param {*} ACCESS_KEY 
//  * @param {*} SECRET_KEY 
//  */
// function getConfig (ACCESS_KEY, SECRET_KEY) {
// 	if (!ACCESS_KEY.length) {
// 			console.error('请输入 ACCESS_KEY')
// 			return
// 	}
// 	if (!SECRET_KEY.length) {
// 		console.error('请输入 SECRET_KEY')
// 		return
// 	}
// 	qiniu.conf.ACCESS_KEY = ACCESS_KEY
// 	qiniu.conf.SECRET_KEY = SECRET_KEY
// 	return new qiniu.conf.Config()
// }
 
// const upload_file = (file_name, file_path) => {
// 	// 保存到七牛的地址
// 	const file_save_path = prefix + file_name
// 	// 七牛上传的token
// 	const token = getQiniuToken(bucket, file_save_path)

// 	const extra = new qiniu.form_up.PutExtra()

// 	const config = getConfig()

// 	const formUploader = new qiniu.form_up.FormUploader(config)

// 	// 上传文件
// 	formUploader.putFile(token, file_save_path, file_path, extra, (err, ret) => {
// 		if (!err) {
// 			// 上传成功， 处理返回值
// 			console.log(ret);
// 		} else {
// 			// 上传失败， 处理返回代码
// 			console.error(err);
// 		}
// 	});
// }
 
// upload_file('test.png', './image/avator.jpeg')


const fs = require('fs')
const path = require('path')

// fs.readFile('./image/a.text', {}, (err, data) => {
// 	if (err) {
// 		console.log(err)
// 		return
// 	}
// 	console.log('------>', JSON.stringify(data))
// })

// fs.stat('./image', (err, Stats) => {
// 	if (err) {
// 		console.log('------>', err)
// 		return
// 	}
// 	console.log('------>', Stats)
// })
class upQiniuImage {
	constructor ({}) {

	}

	upFile () {
		
	}

	/**
	 * 获取目录下的文件名
	 * @param {*} path 路径
	 */
	readdir (path) {
		return new Promise((resolve, reject) => {
			fs.readdir(path, (err, files) => {
				if (err) {
					console.log(err)
					reject([])
					return
				}
				resolve(files)
			})
		})
	}
	
	/**
	 * 判断是不是文件
	 * @param {*} path 
	 */
	isFile (path) {
		return new Promise((resolve) => {
			fs.stat(path, (err, stats) => {
				if (err) {
					resolve(false)
					return
				}
				resolve(stats.isFile)
			})
		})
	}
}