export default {
    name: "scroll-down",
    process: {
        inserted: function (el, binding) {
            let downLimit = parseInt(binding.arg)||0;
           
           
            let keyTime = null;
            el.addEventListener('scroll', () => {
                if (keyTime != null) {
                    clearTimeout(keyTime);
                }
                keyTime = setTimeout(() => {
                    //当前元素的滑块高度(总高度)-(元素底部位于元素总高度顶部的位置)
                    if((el.scrollHeight-el.clientHeight-el.scrollTop)<=downLimit){
                        console.log("run")
                        binding.value();
                    }
                    console.log(el.scrollHeight,el.scrollTop,el.clientHeight,el.scrollHeight-el.clientHeight-el.scrollTop)
                }, 100);
            })
        
        }
    }
}