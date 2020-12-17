import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const img=["https://popfr.fr/wp-content/uploads/2019/01/clone-Commander-Cody.jpg",
"https://www.broshobby.com/global/wp-content/uploads/2020/05/up_5-1-e1589720841656.jpg",
"https://i-mom.unimedias.fr/2020/09/16/star-wars-on-en-sait-un-peu-plus-sur-la-serie-sur-obi-wan-kenobi_1.jpg?auto=format%2Ccompress&cs=tinysrgb",
"https://pbs.twimg.com/profile_images/952276551642570753/BaCwx0vv_400x400.jpg",
"https://media.melty.fr/article-4185644-so/media.jpg",
"https://i.pinimg.com/originals/4b/ec/c6/4becc62770ea547b22251a95e1b80d19.jpg",
"https://img1.yeggi.com/images_q/3375936/stl-files-of-b1-battle-droid%E2-%E2-%E2-from-star-wars-franchise-model",
"https://www.nicepng.com/png/detail/348-3484648_b2-droid-super-battle-droid.png",
"https://static.wikia.nocookie.net/frstarwars/images/a/a1/Droideka.png",
"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASERUQEBMWFRUVGBUWFhcVGBgVFxUXFhUaGBcWHRcaHSggHh4lGxcWITMhJikrLi4vGCAzODMtNygtLisBCgoKDg0OGhAQGi0lHx8tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANsA5gMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EADsQAAEEAAQEBQMCBQIFBQAAAAEAAgMRBBIhMQVBUWEGEyJxgTKRoUKxFCNSwdFiknKi4fDxFTNTgoP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACERAQEAAgICAwADAAAAAAAAAAABAhEhMQMSE1FhQXGB/9oADAMBAAIRAxEAPwDpREQEREBERAREQEREBERAREQERemYSSW4oiA9wIbmNC6veuloNOPe6Fkcr2Hy5S4NcNfpA1ocrNLzhpw9oNVfIqwcW4c84OOKRxdJE+w0fSGZA3KHHlbc2vWlWZo3xEWLJcLI+lrPkDbXl3VmqXcdiIigIiICIiAiIgIiICIiAiIgIiICLKzS1IMJSzSzSvqrwi9UsKWIwiIoCIpbhPApJcr3eiNzg29LOhNtB3Gn770oIlcuPx8+HHnYZrTI28ubVrc3ozEc6zbK64HwxFJho52ufbm5qtotpOhFjQ5a0VZ4W5uIxWNwrWuZFHEI2+aKe95NvkogelpDa5bHW9H6TlV5vEWOLnE4mXMGuIFM2G5Iy9fZcGJ8Ryuy27zS80AaBLSC3XLoDdcgscVxMjXOYXZXZtQNCAAQAfkH/sLlwjS5+wIa41XWyOXP/CakauW98L2zYX0C9LDDoPZZRkREQEREBERAREQEREHFxLFmPK7K5zb9WTcfgrXBxiB20tdpG5f+Ztj8KRXLiuHQyfWwX1Gh+4U5HQwkiwLHVhDx+NfwsNlbtYvodD9ioR/AHMObDylp6Gx+QvL+IY2LSZgkaObmh4r3GyuN+xZI2WQP35d1tbBYsEHWu/vW9KEwvGcM4ah8R29Bse9FTnDsaGyA4fEtN6Zi3K8Ai9uvJenDGNT9G4clen4Vw1UjhuLxQ4gtmeXFzQc9NIJcTdlwIBFfnkrFjcOyRgNjXRj6DQeeRwH0nuu/xya3O3onjmlFIXkhdmMhyuIqiDR7LlIXHPDVcMsdVrK2YfDvkdljaXHo0WV18JwjZJKeSGNGZ1bkDkPe1Yx4mgiccPCwNDdw3+/U+68+V0zpo4R4eEX83FBt2A1jnNDQeWY7E9lunxodIJC4O8tknkQ2GmWSqDmtcQS0URmOhzE7Czp4h4pw0eWSdzQW2Wg72RRoczWnXVUPinHp3Pc/DxiDPefFYgXK4HkBuBWzdAAsbSyvpT+JQYTDsjlmYxsUbWan+lob/ZVIeJ4ZpCcKyaWt3tYGxgc/5khaK9rXzx2LwjJPMmMmLkHquTVo7hg0Hza3YrjM8zQYgGNdsATy7AK9rOEt4kwUZc6UOBJBsFuc2bGhG+6reEJYXX6bJdRNu1JNlrboe5UZhMVi5ZvIotec24JotBJ/Yj7LqdwqWERmXYuJkOWqIALfvrqklZtWvw3xAPDmukBN+kHehv769zspxfO3wEBr2EgEFwI5eogH7AFTcPiSY+ny2kganXUgamuV1a6fHb0ntpaUVYh8Tuv+YxtdiR+5KnuH41szMzfYjej78x3WbjYsrpREWVEREBERAREQEREBZCwshagw/hUM9M8oZ9fU3Qu7V1XG/wAHztcHRNc5uprdwo0dN+akGOpSmF4s9u/q5+v1a1V3uvV4rI7YWOHhfBcYwl00WeInIQ55ZQI3sjlXQq2BgjbTXOY1wBtzbjdXV1EfcNXAzxC/UGnA1obAFbVlIpbuH8cdnt5JaSLANVW1f4XqvktmtT/P5ej3/jTVj4sx82mSAAZ8jxy3OhNaVuoHENcC6mDLnpj3SxsDmWNw6iHUSdNFZ+JYaMtqCOOZzj6rpoN9xqz05tb0q1UuMYKXCytlwp82MEAOcA9rXdJGmsvYmgdCD0euOUS4TJ24CN4ZIXZb8t1uY5r2gijXpJo9j0KpHCuGT4mR0885iZLI6QNYbebJrMWmx6QdFaOKeJKiPmRxMe9xB8p+ZrrIphyiiSObSQD9lE4SfDS5w0uDhJHKGEta5z2BxIF0AC0HdwJr3Xky8c7efLFV+O8Q/hJnjDiMtJIa9zCZANqc8uuxpqNwRsbC5+FT4rHPc1zw1kYzPdWbKOwdep2Ck/EHAZ5AXRFpaRoygHNadctga69SseFYGwwzNxFx5i0j+q6qgRvVa7rz5Y6cmzBcChjqR0jpS9+TuBVh3Tl7bUp3ivjHBRR+SyMylmlx5AxgNburV2h0HTfkqZxvipc9uGa4RtaACQC3fe+dqe4XweFkYLGMmohwEl5XW226bOFE6f4UnKdPA4Wx+Pw72YhkIxAkeXAZwyNrbDy26tzg1uvTnsrN4w8AvEYijnt5Lnlxjq6BGgDrAAJPyqLgJcjZ3MaD5pjaGEW1rczzlt1hvayPlTbPGeIkw38L+sgRmUakR0QW0PsDvlFK6SuNxw4Iw5IzBmUNN7BugDhp9OXTooJuMc2QhzM5eCGgHLrQyuutQOnNc3EHlhbW7XaA/qo2T9jX2Vs4Z4bilha+YODiS4EGiGloaB7UL+UuVhrauxGUSZXMFaEl4NZSaur52rn4fwQYHPbeV9VruBdGuW6qHiDgk2DaZGyB8ZcBbrD2k7abHbf8Lv8AC+OkDmEknPo4df8AVQ6bpjjct8lsi7oiLDQiIgIiICIiAiIgIiKjIXoFeFlalVstemvIWq0tdJmu0hhceW2DZa4U4A5bG+/uqh4ywE083nM1zaZRYDa79NlP2lrfzZTpr5Ko54RiI3NaPMa12pq3C62OXn79V3ycNfEYjbjZNg0atputNDWmitC8Sj0u0v0ur3ymlwyyt5Z3yo8c0YaSySQuBdWVuUGgNDZNHU6haI/FTm+mT1f8Qv8AI1XnhDwyZoP/AMwB/wD0Y5v70oTxM0NxDw0ULOix7JeU3LicJKc+XK83boyNfcHf5Uzh+IgRtYwg0W7nJYFCqIq60sOrXZUOAelh2IJIrmSdj/tC7n414GXIGkkeo6Voem/t2V3U0lWYV0YuUHezvRDWl1aaEF1DqaVow/DmvAcwAE70RYNA61+ypmDxkrY5JCcoZWjT9Vua3a6/XvXLuuiDiLXB2ZlVTXEXGfVyLm6HbalLqmrrb3j8O7zi4NtodIN+dkg+119lavDWOe9nlyD1RgAO/qbsCe42PXfmq6ydhHpeQbsZhf5b/hWTgPEo2giRl/62+ofjZWTabPFmCM2EkY3Vwp4HUsN19gVwcOxGFje/CM8wy5wwvcxojBZo5jXBxJIJrYA0VaS+J4zRvBHvagOKcLb50cwcGjPbgbNucTZHd10futTc4OKnEWAfuNxzC9LOlYRZRXQwiysKWAiIoCIiAiIgIiICysIrsZWERNgg77c0RQUDDYO8XLDzDw5vvE8OH4tQXiV1TuJ/rePyrTxYGLiLJB+ssPvmGR37FVPj7XSyyPaLDXPJ7C91mdqzFhrb6dRo4V0uj9rWviGjm6bX91a+D8DYcLnhkLpGkgO5NeO3RcEDo5GecI4w/UOaRVOG4q637KrjNo3BYijf06EVQNgkZrB0OrQurHxufHbSCG+rK0BoAuiQ0AC9NfhaJcK573DQNGUA8gMtk1uTqdFzRYl8Mvq+k0L5d/m7tWs7euGvJDm8/qHxuPsrNhmYV7A9shY/mAdj86/lQGMiEbm4iL6SdQP0np7dF2Y3CAgSN2cLHY8wsiRkkkZrnDwOZ0P33/K6I8dE4DzyQ1u+ZxLBm0BOtjlr+VD4Maeo6Kc8PY1wl8triGSAhwvR9AltjnR1VmV2mm7hwe+S2iUNq2SNLiHNBAJAcKc0XrqdlI8F42yc+WTUguxR/TV9uY+69zYCXyDAyW2gANa4U1oBBNFurSSAcw10C2cNhxToh5rnktt1PkMhsH0NAe40Mti8ze5Fr0Y6y7bxkTUWBe5mdosdjel1ddLWsYdx0Av2Xbw1+MiDpWND2tskMlfIyiA2vKe7MKu9DXS1M4XiuGEYbIx8demyC0h1WQSCDrvWq7fF9cu08e1WdGV4IVnwEOGlOR07C8m/THICSRtbtKu1C8Sia1xDDmF6Hr9ljyeL1Zz8fq4EWSi8ziwiIoCIiAiIgIiICIiAiIgg/EeGGaGc7Rv9XtuPyAPlceAjw7MOWOaHSyCR2o5TRuaBfxf/ANgpzi8YdDICappN9Muv9lU58Q6/N9PrvQbsLXDTtpQHYreGO2crpz+COPDDebC9mZtg6bhwBaT7HK3TsorE+WHyPjdlBc4gEE3mcSBQ915xoqaR7RQfqffmPg2o3Fg3fI/v0Wfxf6WfCCANBDnPLj6cwyhrcrrcB7giqsVfOlEva7M2IEOEtMdnoCwQM1n6Td+paOG47IacLprg3sTZBPa6WMJmknjsE04DQajWzor3wiQlhdhZPIlp8bxbHXbXssg6jmHAjsW+ykcNh6ZkBzM1LXfGoPddmO4G+eCRg9TogZm1uCB/Mb19TRfuwLp4Xgh/6ZFiom6szjENsuztbI4eeLJojmNBXtrnKaqxCeRv2Uv4e4e50ge3QMNk9Sb0+y3wcPfIA9mUjflqu3AEw2CKsiwdKPv3H7KaVNBegVzw4lrtlvW5R14bFuZ9LiPYkKQxnFzK0Me1hFU7T6xex5+1VWhChLWbXbHyadJnpql4exjnGB72NJsBxzVpW/3+645YcSDbXtd92lSNrCZ+XLLumXkuXbnwj5CD5jaI7g39kW9FwcxERQEREBERAREQEREBERBF+JXkYZ9cy0fdwVd4c0PyQlrdZLJaCHnOGsAzXqL5ciSrTxmLNC8AZiBmA65TdfNKG4uH4bLPhyxrhM+MtLWkNysjcx4u6IfZHLTY2umGUkYym6q3ieEx4iVgJ9L3NvrrmB+zh9lFYGTUtdrfXnatXFMNNLEcRiXte97mMzAAGwx5BptDZoGyqcjKN8wuWXbUTcULC0tDQAQdhV2uSPCujfnBsiuQo+42PstmDl2K7pACLSUTvhDxXDBMZMTHK9wsgxOGSj9QfG76htqDdAaaKVwuIjgwzZMPflSYjF5GnQmJxYcpHb1AdwvnsjNbbuFMycQLhDBFq2FuUAa29xL5T/uLh7ALU5pvTllxb8LLla4+W71R9Mp1A+FM47iPnYdxunCtdtNj+60YWCKcPwuIzCj5rCCBVB2YajejY+VyY3w7iYT/AC7mjOxbv7Ob/cLOU0su0zwSB7pBZ0abNcxu0fOn2VlUR4ZwskcNSijyB3A5AqXSAiItbBERAREUBERAREQEREBERAREQEREBQU3BH4qSSOdzmMsvztALRmLQOd6ZR8uPupt7qBKi4cRX8ZJdOL2RlpP0t9ZbpdZSwt26JvQ143gPo8pswkDWl4GWjmaMjSD0rNfcqh8Rh1DwN9D7j/ortDi8uJhB+l4dHe+rvUK+cqr3i6ARSuZpTvUOoJ1/wA/dc7eV1whMMaNKcwLA9pb+oajuq9Eeak8NiMpDhy3TaPc7e2+i0OYMPPW7XUR2dzF+/7hSOObZDmjfX5THcQja3K8DNvVZieh7LUy54XXDllc4VLWhcRY0F826bWCr9wiUGJmt2229cvT4sBUrBY8vaRJ6gS67Nmx1PsPwpngfEWnysLG0ny3yPzuIFRuJGQf1auzctRtpa759OWPa0oiLk6CIiAiIgIiICIiAiIgIiICIiAiIgIiINWK+k/H7rRh8NA63lp8xwAcW/qyAhhPsNB8roxAtqqvHG5pBXIV/wB/dNjq8SYRv8OZGXbHhxN6iwGn2Ipp+F89nxJc63anvr+V9O4PhQ7CeWf1iQf7iQoDwr4TY5gmxTbJ+lmwFHc1vZ5dFmzdIqLJQTXNdkUoX0nFcFw8jDG5gy9tCK2IPJUPjfhvEQOtjTLHyLRbh/xNH7j8KXFUtwgsewZjoDqeyrHEGtbiiQbGcX2IOqk+CRO8p8shIjotA/U59aADk0WLPwNSoIRPfIWsBc4uOg1JNrWE4TKpbw3w+WWQYdgonTlQINOLrGgqzfsvoHBsFBGz+X6n6hzstC7NgHW/g0ovw7wSVlPla1rv1USXHTUGtNfnTRWUBa3U0IiKKIiICIiAiIgIiICIiAiIgIiICIiAiIg8ybH2VX4k3+Y74/ZWl2xVYxkjHuIa4Eu0aLFkkaCkSp/hseWGMf6W/kWV0gLDRQrosooiLxNK1ozOND+52HugjuK4Rs7mYU0101tjeds7QSGnXQElgv8A1juufgPh9mGe8nWQHKT00ux7rTjMTJiQ2aFrx5LM8YLQSXNeXiT0k2CQwDmQOysXE8eySczMADH7loky8spzOjbdjXSxrud1rXDO+RERZaEREBERAREQEREBERAREQEREBERAREQEREG3CD+YwdXNG9bkcwpnxXwGDWRjAKJzdCeVdKo7UofBf8AuxjmXtAG5OtmgN9AT8K0+JcUwxv0fsLtjq26kaKwVBF5Y8EAggg6gjUEdV6UBRnG8K+Xy2M09dk9KBr/AMKTT/ygqGD8/CTuw8Z0aBIBuBHJmJYT2cDXupJ0j6igExLYxWUMGUufZy2PVTSQN+S6cTwxxMsrHkyyEG3bU0UxnZo1PuoEQTxyOuF4BN23NILNEm9TV2dVrG/aWLZhZg9t7EaEdCty8P4G2PXDzNc6gTZDc22lOpInEjUURYI31HfmpfxXtERQEREBERAREQEREBERAREQEREBERAREQYg4jg4ZmfxrMzHhzW+nOMxoVl6mxy6rfjOKcBaDnwwHMPGHv6dDqwHTTXSt7C3cIwEckmeRgf5YIaDR1eKJo9h9itPizyiWxhoaKugKGp226VyVk2VE8Bc0wNLPpt+WhQy+Y6qHIVWnJSC4eCxBkQY3Zrn/FvLq/5l3KAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg6uBwnzXEOomiAeegaa70Fo49hpGW+Vr2j+pwoWO68Ar1PI6SvMcX1tnJdXtey1jlpLNuHh7PqcLp1VfYb18rsRFlRERAREQEREBERAREQEREBERB//2Q==",
"https://i.pinimg.com/originals/02/4f/73/024f7332afb0edfd53cc5530659bfa27.png",
"https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2020/09/mandalorian-saison-2-baby-yoda-big__w770.jpg",
"https://media.anakinworld.com/uploads/entries/original/personnage-yoda.jpg",
"https://oyster.ignimgs.com/wordpress/stg.ign.com/2020/06/art-of-mandalorian-final-cover-credits.jpg",
"data:image/jpeg;base64,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",
"https://media.kapowtoys.co.uk/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/i/gideon2_1.jpg",
"data:image/jpeg;base64,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",
"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fennec-season-2-1607088642.png?crop=0.389xw:0.931xh;0.133xw,0.0407xh&resize=640:*",
"https://www.theleathercity.com/wp-content/uploads/2020/06/The-Mandalorian-Kuiil-Vest-2.jpg",
"https://upload.wikimedia.org/wikipedia/en/d/d7/Ahsoka_Tano.png"]


const language = {
  "fr":{
    "PLAYER_1":"Joueur 1",
    "PLAYER_2":"Joueur 2",
    "THE_PLAYER_1":"le joueur 1",
    "THE_PLAYER_2":"le joueur 2",
    "WINNER_IS":"Le gagnant est",
    "GAME_COMPLETE":"La partie est teminé",
    "OBTAINED":"a obtenu",
    "POINTS":"points",
    "REPLAY":"Rejouer"
  },
  "en":{
    "PLAYER_1":"Player 1",
    "PLAYER_2":"Player 2",
    "THE_PLAYER_1":"the player 1",
    "THE_PLAYER_2":"the player 2",
    "WINNER_IS":"The winner is",
    "GAME_COMPLETE":"Game over",
    "OBTAINED":"obtained",
    "POINTS":"points",
    "REPLAY":"Replay"
  },
  "de":{
    "PLAYER_1":"Spieler 1",
    "PLAYER_2":"Spieler 2",
    "THE_PLAYER_1":"der Spieler 1",
    "THE_PLAYER_2":"der Spieler 2",
    "WINNER_IS":"Der Gewinner ist",
    "GAME_COMPLETE":"Spiel vorbei",
    "OBTAINED":"erhaltet",
    "POINTS":"punkte",
    "REPLAY":"wiedergeben"
  }
}


//Thanks : https://www.codegrepper.com/code-examples/delphi/node+js+wait+1+second :) 
async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   






class Square extends React.Component {
  constructor(){
      super();
      this.state = {
          value : ""
      }
  }

  updateValue(value){
      this.setState((prev,props)=>{
          return { value: value}
      })
  }


  //Create elements in square

  //this.props.boardState.img
  ifShowImage(hidden,img,key){
    if(!hidden){
      const alt = `Image ${key}`;
      return <img className="caseIMG" src={img} alt={alt}></img>;
    }
    return;
  }






  //Actions in square
  async buttonClick(card,action){
    if(!action.getPlayerCanPlay()) return;
    if(!card.hidden) return;
    card.hidden=false;
    action.updateCard(card);

    const prevCard = action.getPreviousCard(card);
    if(prevCard==null) return;

    if(prevCard.value===card.value){
      action.changePlayerScore(3,false);
    }else{
      action.changePlayerScore(-1,true);

      action.setPlayerCanPlay(false);
      await sleep(2000);
      action.setPlayerCanPlay(true);

      prevCard.hidden=true;
      action.updateCard(prevCard);
      card.hidden=true;
      action.updateCard(card);
    }
  }








  //Render in square

  render() {
    const style = {cursor: this.props.boardState.hidden ? this.props.action.getPlayerCanPlay() ? "pointer" : "default" : "default"};
    return (
      <button className="square" style={style} onClick={()=>{
        this.buttonClick(this.props.boardState,this.props.action);
      } }>
      {this.ifShowImage(this.props.boardState.hidden,this.props.boardState.img,this["_reactInternals"].key)}
      </button>
    );
  }
}

  
  class Board extends React.Component {
    constructor(){
      super();
      this.state = {
        selectedLanguage:"fr",
        gameReady:false,
        height:3,
        width:3,
        cards:[],
        playerCanPlay:true,
        playerTurn:0,
        previous:null,
        score:[0,0]
      }
      
      let val = this.state.height*this.state.width;
      if(val%2===1) val--;
      const imgList = this.shuffle(img);
      for (let i = 0; i < this.state.height*this.state.width/2-1; i++) {
        const squareData={
          value:i,
          img:imgList[i],
          hidden:true
        };
        this.state.cards.push(squareData);
      }
      const sameBoard=Object.assign([],this.state.cards);

      for (let index = 0; index < sameBoard.length; index++) {
        this.state.cards.push(Object.assign({},sameBoard[index]));
      }

      this.state.cards = this.shuffle(this.state.cards);

      for (let index = 0; index < this.state.cards.length; index++) {
        this.state.cards[index]["index"] = index;
      }
    }

    //Thanks : https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
    }





    //Fonctions to send

    //Upadate State
    updateCard(data){
        this.setState((prev,props)=>{
          const newState=Object.assign({},prev);
          newState.cards[data.index]=data;
          return newState;
        })
    }

    getPreviousCard(card){
      const previous = this.state.previous;
      
      this.setState((prev,props)=>{
        const newState=Object.assign({},prev);
        if(newState.previous===null) newState.previous = card;
        else newState.previous = null;
        return newState;
      })

      return previous;
    }

    changePlayerScore(points,changePlayer){
      this.setState((prev,props)=>{
        const newState=Object.assign({},prev);
        newState.score[newState.playerTurn] = newState.score[newState.playerTurn] + points;
        if(changePlayer) newState.playerTurn===0 ? newState.playerTurn=1 : newState.playerTurn=0 ;
        return newState;
      })
    }

    getPlayerCanPlay(){
      return this.state.playerCanPlay;
    }

    setPlayerCanPlay(playerCanPlay){
      this.setState((prev,props)=>{
        const newState=Object.assign({},prev);
        newState.playerCanPlay = playerCanPlay;
        return newState;
      })
    }

    getText(textName){
      if(language[this.state.selectedLanguage]==null) return `ERROR: no language named "${this.state.selectedLanguage}"`
      const text = language[this.state.selectedLanguage][textName];
      if(text==null) return `ERROR: no text call "${textName}" in language "${this.state.selectedLanguage}"`;
      return text;
    }



    gameFinihed(){
     this.setState((prev,props)=>{
      const newState=Object.assign({},prev);
      newState.playerTurn=0;
      newState.gameReady=true;
      newState.playerCanPlay=true;
      newState.previous=null;
      newState.score=[0,0];
      newState.cards=[];

      let val = this.state.height*this.state.width;
      if(val%2===1) val--;
      const imgList = this.shuffle(img);
      for (let i = 0; i < newState.height*newState.width/2-1; i++) {
        const squareData={
          value:i,
          img:imgList[i],
          hidden:true
        };
        newState.cards.push(squareData);
      }

      const sameBoard=Object.assign([],newState.cards);
      for (let index = 0; index < sameBoard.length; index++) {
        newState.cards.push(Object.assign({},sameBoard[index]));
      }

      newState.cards = this.shuffle(newState.cards);

      for (let index = 0; index < newState.cards.length; index++) {
        newState.cards[index]["index"] = index;
      }

      return newState;
    })
    }

    backToMenu(){
      this.setState((prev,props)=>{
        const newState=Object.assign({},prev);
        newState.gameReady = false;
        return newState;
    });
    }

    getWinner(){
      let gameCompleted = true;
      for (let index = 0; index < this.state.cards.length; index++) {
        const element = this.state.cards[index];
        if (element.hidden){
          gameCompleted=false;
          break;
        }
      }
      if(!gameCompleted) return;
      const winner = (this.state.score[0]>this.state.score[1]) ? this.getText("PLAYER_1") : this.getText("PLAYER_2");
      return <div>
              <p>{`${this.getText("GAME_COMPLETE")}`}</p>
              <p>{`${this.getText("WINNER_IS")}: ${winner}`}</p>
              <p>{`${(this.getText("THE_PLAYER_1").charAt(0).toUpperCase() + this.getText("THE_PLAYER_1").slice(1))} ${this.getText("OBTAINED")} ${this.state.score[0]} ${this.getText("POINTS")}`}</p>
              <p>{`${(this.getText("THE_PLAYER_2").charAt(0).toUpperCase() + this.getText("THE_PLAYER_2").slice(1))} ${this.getText("OBTAINED")} ${this.state.score[1]} ${this.getText("POINTS")}`}</p>
              <button onClick={()=>{this.backToMenu();}}>{`${this.getText("REPLAY")}`}</button>
             </div>
      //Thanks : https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
    }





    //Create element in board

    generateCards(){
      this.setState((prev,props)=>{
        const newState=Object.assign({},prev);
        newState.cards=[];
        let val = newState.height*newState.width;
        if(val%2===1) val--;
        for (let i = 0; i < newState.height*newState.width/2; i++) {
          newState.cards.push(i);
        }
        return newState;
    });
    }

    renderSquare(i) {
      const action = {
        updateCard : ((data) => {return this.updateCard(data)}),
        getPreviousCard:((card)=>{return this.getPreviousCard(card)}),
        changePlayerScore:((points,changePlayer)=>{return this.changePlayerScore(points,changePlayer)}),
        getPlayerCanPlay:(()=>{return this.getPlayerCanPlay()}),
        setPlayerCanPlay:((playerCanPlay)=>{return this.setPlayerCanPlay(playerCanPlay)})
      }
      return <Square key={i} boardState={this.state.cards[i]} action={action}/>;
    }

    renderLine(square){
      const line = [];
      for (let i = 0; i < square.length; i++) {
        const element = square[i];
        line.push(this.renderSquare(element));
      }
      return line
    }


    renderCollums(){
    const elements = [];
    let k=0
    for (let h = 0; h < this.state.height; h++) {
      const cases = [];
      for (let i = 0+(h*this.state.height); i < this.state.width+(h*this.state.height); i++) {
        if(this.state.cards[i]!=null){
          cases.push(k);
          k++;
        }
      }
      elements.push(<div className="board-row" key={h}>{this.renderLine(cases)}</div>)
    }
    return elements;
    }




    lunchGame(){
      this.setState((prev,props)=>{
        const newState=Object.assign({},prev);
        newState.gameReady = true;
        return newState;
    });
    this.gameFinihed();
    }



    //render in board

    render() {
      const style={position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)"};
      const textCenter={textAlign: "center"}
      if(this.state.gameReady){
        return (
          <div style={style}>
            <div style={textCenter}>{`${this.getText("PLAYER_1")}: ${this.state.score[0]}        ${this.getText("PLAYER_2")}: ${this.state.score[1]}`}</div>
            <div style={textCenter}>{this.renderCollums()}</div>
            <div style={textCenter}>{this.getWinner()}</div>
          </div>
        );  
      }else{
      return (
        <div style={style}>
          <button onClick={()=>{this.lunchGame();}}>{`${this.getText("PLAY")}`}</button>
        </div>
      );  
      }
    }
  }







  //The game
  
  class Game extends React.Component {
    render() {
      const style={"width":"100%","height":"100%"};
      return (
        <div className="game">
          <div className="game-board" style={style}>
            <Board />
          </div>
          <div className="game-info">
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  