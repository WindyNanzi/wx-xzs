const baseURL = 'https://tea.qingnian8.com';

export function request(params){
  
  let dataObj = params.data || {};
  let headerObj = {			
    'content-type': 'application/json'    
  }
  
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL + params.url,
      method: params.method || "GET",
      data: dataObj,
      header: headerObj,
      success: res => {
        if(res.data.error) {
          wx.showToast({
            title: res.data.error.message,
            icon:"error",
            duration: 1000
          })
          reject(res.data)

          return
        }

        if(res.data.errCode!=0){
          reject(res.data);
          wx.showToast({
            title: res.data.errMsg,
            mask:true,
            icon:"error"
          })
          return;
        }

        
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}