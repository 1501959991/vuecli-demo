module.exports = {  // export default 可能会不支持 换成 module.exports={}
  devServer:{ // 开发环境配置
      proxy : {  // 反向代理字段
          '/api' : {  // 接口的一部分  所有需要跨域接口的 共有部分
              target : "http://39.97.33.178",  // 接口目标地址
              changeOrigin: true  // 是否启动反向代理
          }
      }
  }
};