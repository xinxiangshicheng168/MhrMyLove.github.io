let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
    //  x.setAttribute("src", "qlx.mp3");
     x.setAttribute("src", "https://www.joy127.com/url/110938.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = '亲爱的吴成成小姐：<自与你相识以来，你的身影已在我心中烙下不可磨灭的印记。你的美丽如朝阳般耀眼，你的善良如微风般柔软，你的睿智如繁星般璀璨。与你相伴，如沐春风，如饮醇酿，你是我生命中最美的惊喜，最动人的诗篇。<我仍记得初见你时，心潮澎湃，灵魂震颤。你优雅的举止，甜美的笑容，瞬间俘获了我的心。那一刻，我知晓，你就是我穷尽一生都要找寻的另一半。于是，我怀着忐忑的心情，走进你的世界，渴望与你并肩而行，携手共度人生的点点滴滴。<在我们相知相爱的日子里，每一天都如诗如画。与你漫步在星光点缀的街头，欣赏城市的绚丽霓虹；与你徜徉在绿意盎然的园林，聆听自然的低吟浅唱；与你畅谈人生理想,激荡思想的火花……你的陪伴，让我的生命变得如此丰盈而充实。<成成，你是我的灵感缪斯，我的心灵港湾。因为你,我变得更加勇敢、坚定、温柔。你教会我爱的真谛，让我懂得了生命的意义。此生能与你相爱，我深感幸运。我愿执子之手，与子偕老，共同谱写人生的华章。<亲爱的,我想对你说，我爱你，胜过一切。我的爱如星辰恒久，如山峦巍峨，永不褪色。让我们携手前行，共度人生的四季，在彼此的陪伴中，找到属于我们的诗和远方。<此致 深深的爱意与祝福'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },70);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 5500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
