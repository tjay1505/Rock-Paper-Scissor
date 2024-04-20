function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }
  
  
      const game1 = document.getElementById("games")
      const game2 = document.getElementById("games2")
      const imgG1 = document.getElementById("imgG1")
      const imgG2 = document.getElementById("imgG2")
      const resholder = document.getElementById("resholder")
      const result = document.getElementById("result")
      const players = document.getElementById("players")
      const bonusload = document.getElementById("bonusLoader")
      const value = document.getElementById("val")
      const bon = document.getElementById('bon')
      const rule = document.getElementById('rule')
      const logoimg = document.getElementById('logoimg')
      const imgary = {
        i1:"./images/icon-paper.svg",
        i2:"./images/icon-rock.svg",
        i3:"./images/icon-scissors.svg",
        i4:"./images/icon-lizard.svg",
        i5:"./images/icon-spock.svg"
      }
      const imgobj = ["","./images/icon-paper.svg","./images/icon-rock.svg","./images/icon-scissors.svg","./images/icon-lizard.svg","./images/icon-spock.svg"]
      imgG1.className = 'img1'
      imgG2.className = 'img2'
      
      function reset(){
        console.log(true);
        game1.style.display = 'grid'
        game2.style.display = 'none'
        result.style.display = 'none'
        players.style.display = 'none'
        imgG2.setAttribute('src','./images/loading_6356617.png')
        logoimg.setAttribute('src',"./images/logo.svg")
        resholder.innerText = ''
        // let t = logoimg.src
        // console.log(t);
        // if( logoimg.src == "http://127.0.0.1:5500/images/logo.svg" ){
        //     console.log(true);
        //     game1.style.display = 'grid'
        //     game2.style.display = 'none'
        //     result.style.display = 'none'
        //     players.style.display = 'none'
        //     imgG2.setAttribute('src','./images/loading_6356617.png')
        //     logoimg.setAttribute('src',"./images/logo.svg")
        //     resholder.innerText = ''
        // }
        // else if( logoimg.src == 'http://127.0.0.1:5500/images/logo-bonus.svg' ){
        //     console.log(false);
        //  openBonus()
        // }
        
      }
     
      function upDateRes(j,q){
        result.style.display = "flex"
        let newary = ["",'YOU WIN!','YOU LOSE!','MATCH DRAW..']
        //resholder.innerText = newary[j]
        if(j == q){
          resholder.innerText = newary[3]
        }
        else if(j == './images/icon-paper.svg' && q == "./images/icon-rock.svg"){
          resholder.innerText = newary[1]
        }
        else if(j == './images/icon-paper.svg' && q == "./images/icon-scissors.svg"){
          resholder.innerText = newary[2]
        }
        else if(j == './images/icon-rock.svg' && q == "./images/icon-paper.svg"){
          resholder.innerText = newary[2]
        }
        else if(j == './images/icon-rock.svg' && q == "./images/icon-scissors.svg"){
          resholder.innerText = newary[1]
        }
        else if(j == './images/icon-scissors.svg' && q == "./images/icon-paper.svg"){
          resholder.innerText = newary[1]
        }
        else if(j == './images/icon-sicssors.svg' && q == "./images/icon-rock.svg"){
          resholder.innerText = ""
        }
        else{
          resholder.innerText = newary[2]
        }
        let reshold = resholder.innerText
        let realscore = value.innerText
        parseInt(realscore)
        switch (reshold) {
          case 'YOU WIN!':
            realscore++
            value.innerText = realscore 
            //console.log(1);
            break;
          case 'YOU LOSE!':
            realscore--
            value.innerText = realscore 
            //console.log(2);
            break;
          case 'MATCH DRAW..':
            value.innerText = realscore
            break;
          default:
            break;
        }
        if(realscore == -1 ){
         value.innerText = 0
        }
        else{
        }
        console.log(value.innerText);
        if(value.innerText > 0){
            openBonus()
        }
  
      }
      
      function openBonus(){
        game1.style.display = 'none';
        game2.style.display = "none"
        bonus.style.display = 'grid'
        result.style.display = 'none'
        bonusload.style.display = 'flex'
        bon.innerText = value.innerText
        rule.style.background= 'url("../design/bonus/mobile-rules-modal-bonus.jpg") center'
        value.innerText = 0
        logoimg.setAttribute('src','./images/logo-bonus.svg')

      }
  
      function doGame(s){
        game1.style.display = "none"
        game2.style.display = 'flex'
        players.style.display = 'flex'
        imgG1.setAttribute('src',s)
       //console.log(s);
        let x = getRandomIntInclusive(1,3)
        setTimeout(() => {
          switch (x) {
            case 1:
            imgG2.setAttribute("src",imgary.i1)
            upDateRes(s,imgary.i1)
              break;
            case 2:
            imgG2.setAttribute("src",imgary.i2)
            upDateRes(s,imgary.i2)
              break;
            case 3:
            imgG2.setAttribute("src",imgary.i3)
            upDateRes(s,imgary.i3)
              break;
          
            default:
              console.log('dsrf');
              break;
          }
          
        },2500)
      }
      const bonus = document.getElementById('bonus')
  
      function switchtab(a){
        game1.style.display = "none"
        game2.style.display = 'flex'
        bonus.style.display = 'none'
        players.style.display = 'flex'
        //result.style.display = 'flex'
        let realscore = 0
        imgG1.setAttribute('src',a)
        let x = getRandomIntInclusive(1,5)
        //console.log(imgobj[x]);
        let newary = ["",'YOU WIN!!','YOU LOSE!!','MATCH DRAW...']
        setTimeout(() => {
          imgG2.setAttribute('src',imgobj[x])
          let r  = imgobj[x]
          switch (a) {
            
          case "./images/icon-lizard.svg":
                {
                    if(r == "./images/icon-lizard.svg"){
                        resholder.innerText = newary[3]
                    }
                    else if(r == './images/icon-rock.svg'){
                      resholder.innerText = newary[2]
                      value.innerText = realscore--
                    }
                    else if(r == './images/icon-paper.svg'){
                      resholder.innerText = newary[1]
                      value.innerText = realscore++
                    }
                    else if(r == './images/icon-spock.svg'){
                      resholder.innerText = newary[1]
                      value.innerText = realscore++
                    }
                    else if(r == './images/icon-scissors.svg'){
                        resholder.innerText = newary[2]
                        value.innerText = realscore--
                      }
                    else{
                      console.log('else');
                    }
                }
            break;

          case "./images/icon-spock.svg":
            imgG1.setAttribute('src',a)
                {
                    if(r == "./images/icon-lizard.svg"){
                        resholder.innerText = newary[2]
                    }
                    else if(r == './images/icon-rock.svg'){
                    resholder.innerText = newary[1]
                    }
                    else if(r == './images/icon-paper.svg'){
                    resholder.innerText = newary[2]
                    }
                    else if(r == './images/icon-spock.svg'){
                    resholder.innerText = newary[3]
                    }
                    else if(r == './images/icon-scissors.svg'){
                        resholder.innerText = newary[1]
                    }
                    else{
                    console.log('else');
                    }
                }
            break;

          case "./images/icon-rock.svg":
            imgG1.setAttribute('src',a)
                {
                    if(r == "./images/icon-lizard.svg"){
                        resholder.innerText = newary[1]
                    }
                    else if(r == './images/icon-rock.svg'){
                      resholder.innerText = newary[3]
                    }
                    else if(r == './images/icon-paper.svg'){
                      resholder.innerText = newary[2]
                    }
                    else if(r == './images/icon-spock.svg'){
                      resholder.innerText = newary[2]
                    }
                    else if(r == './images/icon-scissors.svg'){
                        resholder.innerText = newary[1]
                      }
                    else{
                      console.log('else');
                    }
                }
            break;
          case "./images/icon-paper.svg":
            imgG1.setAttribute('src',a)
                {
                    if(r == "./images/icon-lizard.svg"){
                        resholder.innerText = newary[2]
                    }
                    else if(r == './images/icon-rock.svg'){
                      resholder.innerText = newary[1]
                    }
                    else if(r == './images/icon-paper.svg'){
                      resholder.innerText = newary[3]
                    }
                    else if(r == './images/icon-spock.svg'){
                      resholder.innerText = newary[1]
                    }
                    else if(r == './images/icon-scissors.svg'){
                        resholder.innerText = newary[2]
                      }
                    else{
                      console.log('else');
                    }
                }
            break;
          case "./images/icon-Scissors.svg":
            imgG1.setAttribute('src',a)
            {
                    if(r == "./images/icon-lizard.svg"){
                        resholder.innerText = newary[1]
                    }
                    else if(r == './images/icon-rock.svg'){
                      resholder.innerText = newary[2]
                    }
                    else if(r == './images/icon-paper.svg'){
                      resholder.innerText = newary[1]
                    }
                    else if(r == './images/icon-spock.svg'){
                      resholder.innerText = newary[2]
                    }
                    else if(r == './images/icon-scissors.svg'){
                        resholder.innerText = newary[3]
                      }
                    else{
                       console.log('else');
                    }
                }
            break;
          default:
            break;
        }
        result.style.display = 'flex'
          
        },2500)



      }
  
      function doGameBonus(a){
        //console.log(a);
       imgG2.setAttribute('src','./images/loading_6356617.png')
        switch (a) {
          case "./images/icon-lizard.svg":
            imgG1.setAttribute('src',a)
            break;
          case "./images/icon-spock.svg":
            imgG1.setAttribute('src',a)
            break;
          case "./images/icon-rock.svg":
            imgG1.setAttribute('src',a)
            break;
          case "./images/icon-paper.svg":
            imgG1.setAttribute('src',a)
            break;
          case "./images/icon-Scissors.svg":
            imgG1.setAttribute('src',a)
            break;
          default:
            break;
        }
        switchtab(a)
      }
  