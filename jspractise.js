// 6 datatypes   
// 1.undefined // 2.boolean// 3.number// 4.string// 5.bigint// 6.symbol

// 10 -'5' is a bug ans=5
// null is a object

// console.log("agga"-"dfgh");  ans is NaN it is property of  a global object

// console.log(NaN===NaN);  ans is false
// console.log(isNaN(NaN));  True 
// console.log(Number.isNaN(NaN)); True 

// var a=15
// var b=9

// var b=a+b

// // var b=a+b
// var a=b-a
// console.log(a);    without using temp variable
// var b=b-a
// console.log(b);

// // console.log(5=='5');
// // console.log(5==='5');

// var year=2015

// // if(year%100==0)
// // {
//     //   console.log("not a  leap year");
//     // }else
//     // {
//         //     if(year%400==0)
//         //     {
//             //         console.log("it is a leap year");
//             //     }
//             //     else
//     //     {
//         //         console.log("not a leap year");
//         //     }
//         // }
        
//         if(year%4==0)
//         {
//         if(year%100==0)
//     {
//       if(year%400==0)
//       {
//         console.log("it is leap year");
//       }
//       else
//       {
//         console.log("not a leap year");
//       }
//     }
//     else
//     {
//         console.log("it is a leap year");
//     }
// }
// else
// {
//     console.log("not a leap year");
// }

// console.log(b);

// console.log(a>=b);
// console.log(a==b);  false  for one assignment it is 19

// function sum(a,b)
// {
//     console.log( a+b)
// }
// sum(10,30)
// function sum(a,b)
// {
//     console.log( a+b)
// }
// var funExp=sum(10,30)
// var funexp=function (a,b)            /////Anonymous function is always used with function expressions 
// {
//     return a+b
// }

// console.log(funexp(1,30));

// var fruits=["mango","jackfruit","lemon","banana","orange","mango"]

// for(i in fruits)
// {
//     console.log(i);
// }
// for(i of fruits)
// {
//     console.log(i);
// }

// fruits.forEach((ele,array,index)=>{
//     console.log(ele+" "+array+" "+index);
// })

// console.log(fruits.indexOf("mango",1));  if not found returns -1
// console.log(fruits.lastIndexOf("mango",4));  if not found returns -1
// console.log(fruits.includes("mango")); if not found returns -1


// const find=numbers.find((element,array,index)=>{         
    //     return element<0
    //     // console.log("next");                 if we console in the function itself we get boolean values 
    //     // console.log(element>5000);           or if we return the values we get this      find return undefined for false values
    // })
    // console.log(find);
    // const findElm=numbers.findIndex((element)=>{         
        //    return element<4
        // })
        
        // console.log(findElm);
        
        
        // const filter=numbers.filter((element,index)=>{
            //     // return element<450                               ////for results it gives new array       for no results it gives empty array
            //     return element>450                                                       
            // })
            
            // console.log(filter);
            
            
            
            // sort method is used only in the string
            // var names=["gag","dfghj","rtyu","sdfgh","sdfgh"]
            // console.log(numbers.sort());
            // console.log(names.sort());                                        push returns length of the pushed array
            // const client=names.push("dfghj")                             
            // const client=names.unshift("dfghj")                           pop returns which value is poped out  
            // const client1=names.shift()                                      
            // // const client1=names.pop()                             
            // console.log(names);
            // console.log(client1);
            
            // var names=["nikil","march","vimal","bvc","liks"]
            
            // const index=names.indexOf("vimal")
            // // const changeName=names.splice(index,1,"March")
            // const changeName=names.splice(index,1)
            // console.log(names);
            // console.log(changeName);
            
            // var numbers=[50,12,445,785,987,529]  
            // //    does not mutate the original array
            // const sort=numbers.map((ele,index,array)=>{
            //     return ele>500
            // })
            // const sort1=numbers.forEach((ele,index,array)=>{
            //     return ele>500
            // })

            // console.log(sort); 
            // console.log(sort1); 
            
            // var arr=[2,3,4,6,8]

            // let mul=arr.map((ele)=>{
            //         return ele*2
            // }).filter((elem)=>{
            //     return elem >10
            // }).reduce((accumulator,eleme)=>{
            //     return accumulator+=eleme
            // })

            // console.log(mul);
            // console.log(9-'5');
            // console.log("sdfg"-"fghj");
            // console.log(true+true);
// const useless=null
// console.log(typeof(useless));
// const num=6
// console.log(typeof(num));
            // console.log(5=='5');
            // console.log(5==='5');

            // console.log(`${num} the is `);
            // console.log('the anser of twp numbers is + 'num);

            // var animals=["gaga",'fghj','hjkhj','fghjk']
//             const names=animals.forEach((ele,index)=>{
// console.log(ele+" "+index);
//             })

            // console.log(names);

            // console.log(animals.indexOf("gaga",1));
            // console.log(animals.indexOf("gaga"));
            // console.log(animals.lastindexOf("gaga"));
            // console.log(animals.lastIndexOf("gaga",2));



            // var prices=[100,200,250,300,400,500]

            // prices.find((ele)=>{
            //     // return ele>250
            //     console.log(ele>250);
            // })

//           const num=  prices.filter((ele)=>{
//                 return ele>250
//             })
// console.log(num);

// let places="mysore,bdvt,bangalore,bang"
// console.log(places.slice(0,1));
// let res=places.slice(7,-4)
// let res=places.search("bdvt")
// let res=places.substring(0,5)
// let res=places.replace("mysore","bangalore")           it will returns a new string//////
// console.log(places.charAt(8));
// console.log(places.charCodeAt(places.length-1));
// console.log(places.toLowerCase());
// console.log(places.toUpperCase())

////////////////DATES AND TIMES   IN JS//////////////////

// const date= new Date()
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toString());
// console.log(date.toLocaleTimeString());
// console.log(new Date(2023,7,2,12,30,24,45));
