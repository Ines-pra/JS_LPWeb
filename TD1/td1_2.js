function dif_type(){
   let x;
   function type(x){
       console.log(typeof x);
   }
   x;                    type(x);
   x='blabla';           type(x);
   x="blabla";           type(x);
   x=`blabla{$x}`;       type(x);
   x=9;                  type(x);
   x=2.5;                type(x);
   x=true;               type(x);
   x=undefined;          type(x);
   x=null;               type(x);
   x=[1,2,3];            type(x);
   x=new Array();        type(x);
   x={};                 type(x);
   x={"promo":"lpwmce","nb":25};  type(x);
   x=new Date();                  type(x);
   x=function(){alert('toto')};   type(x);
   x=42n;                         type(x);
}
 //dif_type();

 function conversions(){

    console.log("Conversions string en int : ")
    ch="abcdef";
    console.log(parseInt(ch,8));
    console.log(parseInt(ch,10));
    console.log(parseInt(ch,13));
    console.log(parseInt(ch,16));
    console.log(parseInt(ch,32));
//en fonction de la base, il se peut que la chaine ne soit pas convertie en int car il se peut que des caracteres de soient pas reconnu par la base
    /* 
    function roughScale(x, base) {
        const parsed = parseInt(x, base);
        if (isNaN(parsed)) { return 0; }
        return parsed * 100;
      }
    console.log(roughScale(ch, 10));
    */
    console.log('');
    console.log("Conversions string en float : ");
    console.log(parseFloat(ch,8));
    console.log(parseFloat(ch,10));
    console.log(parseFloat(ch,13));
    console.log(parseFloat(ch,16));
    console.log(parseFloat(ch,32));

    console.log('');
    console.log("Conversions int et float en string : ")
    xy=12;
    console.log(xy.toString());
    console.log(typeof xy.toString());
//réecrit l'entier définit, mais si on teste son type, celui ci est bien devenu un string
    yx=12.12;
    console.log(yx.toString());
    console.log(typeof yx.toString());

    
}
 //conversions();

 function egalite(){
    let b=false;
    let n=0;
    let s='0';
    let tab = [];
    let o = {};

    console.log("b==n",b==n," ; b===n",b===n);
    console.log("b==s",b==s," ; b===s",b===s);
    console.log("b==tab",b==tab," ; b===tab",b===tab);
    console.log("b==o",b==o," ; b===o",b===o);
    console.log("--------------------------------");
    console.log("n==s",n==s," ; n===s",n===s);
    console.log("n=tab",n==tab," ; n===tab",n===tab);
    console.log("n==o",n==o," ; n===o",n===o);
    console.log("--------------------------------");
    console.log("s=tab",s==tab," ; s===tab",s===tab);
    console.log("s==o",s==o," ; s===o",s===o);
    console.log("--------------------------------");
    console.log("o=tab",o==tab," ; o===tab",o===tab);

}
// egalite();