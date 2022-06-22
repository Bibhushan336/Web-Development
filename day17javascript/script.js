function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    const hi = await resolveAfter2Seconds();
    console.log(hi,"zzzzzzzzzzzzzzz");
    // expected output: "resolved"
  }
  
  asyncCall();
  