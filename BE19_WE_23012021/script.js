var div=document.createElement(div);
document.body.append(div);

setTimeout(()=>{
    div.innerHTML="10";
    setTimeout(()=>{
        div.innerHTML="09";
        setTimeout(()=>{
            div.innerHTML="08";
            setTimeout(()=>{
                div.innerHTML="07";
                setTimeout(()=>{
                    div.innerHTML="06";
                    setTimeout(()=>{
                        div.innerHTML="05";
                        setTimeout(()=>{
                            div.innerHTML="04";
                            setTimeout(()=>{
                                div.innerHTML="03";
                                setTimeout(()=>{
                                    div.innerHTML="02";
                                    setTimeout(()=>{
                                        div.innerHTML="01";
                                        setTimeout(()=>{
                                            div.innerHTML="HAPPY INDEPENDCE DAY"; 
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

