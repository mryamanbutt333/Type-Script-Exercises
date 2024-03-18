// exercise 11 (store freinds name in [Arrays])


// let freinds:string[]=[`yamman`,`tyaba`,`muskan`,`sultan`,`laila`,`shumaila`]
// for(let i=0; i<freinds.length; i++){
//     console.log(freinds[i])
// }

//(exercise 12) greetings: just like arrays just print message in arrays

// let freinds:string[]=[`yamman`,`tyaba`,`muskan`,`sultan`,`laila`,`shumaila`]
// let message:string=`Governor sahab to great niklai:`;
// for(let i=0;i<freinds.length; i++){
//     console.log(message +freinds[i])
// }


//(exercise 14) guest list {invite guest}// (exercise 15 modify list)the person who not ivited invite him on next dinner
//(exercise 16 os continune from 15 adding new more 3 guests becuase found new table)


// let guestlist:string[]=[`Haseeb`,`Sufyan`,`kamran`];
// for(let i=0; i<guestlist.length; i++){
//     console.log(`Aslamolikom
//     `+ guestlist [i]+ `,\n\n I am inviting you on my dinner tommorow.\n\n Thank you!\n\n`)
//  }
// let not_present:string=`sufyan`;
// let new_guest:string=`tariq jameel`;
// guestlist[1]=new_guest;
// for(let i=0; i<guestlist.length; i++){
//     console.log(`Aslamolikom
//     `+ guestlist [i]+ `,\n\n I am inviting you on my dinner tommorow.\n\n Thank you!\n\n`)
//  }
//  console.log(`mr ${not_present} is not inviting the dinner`);
//  yaha pr 6 guest add kra diye means 3 more

// console.log(`Good News! We found a big table so we adding 3 more guests in our list`);

// guestlist.unshift(`Sir Zia Khan`)

// guestlist.splice(2 , 0 ,`hafiz naeem`);
// guestlist.push(`sami`);
// for(let i=0; i<guestlist.length; i++){
//     console.log(`Aslamolikom
//     `+ guestlist [i]+ `,\n\n I am inviting you on my dinner tommorow.\n\n Thank you!\n\n`)
//  }
//  console.log(`mr ${not_present} is not inviting the dinner`);

 //(exercise 17 telling them sorry table is small invite 2 people)
//  console.log(`\nSorry we can not arrange big table, Only Two people will be invited.`);
//  // yaha pr apne guest remove krdiye
//  while(guestlist.length>2){
//     let remove_guest=guestlist.pop();
//     console.log(` sorry Mr. ${remove_guest} you are not invited!`);
// }
// for(let i=0; i<guestlist.length; i++){
//     console.log(`Aslamolikom
//     `+ guestlist [i]+ `,\n\n you are  still invited.\n\n Thank you!\n\n`)
// }
// maina sarry guest array sai remove krdiye
// guestlist.splice(0,2);
// console.log(guestlist)
//ecercise 19(print a message indicating the number of people you are inviting to dinner)
// console.log(`total number of guest are: ${guestlist.length}`);
// exercise 18( 5 country to visit)

// let places:string[]=[`Saudia`,`Palistine`,`Canada`,`Dubai` , `Egypt`];
// console.log(`orignal `+ places);
// // modifiying array in alphabatical order without changing actual list
// // ... yeh 3 dots sai copy banegi copy bna k changinging krni hogi
// console.log(`copy ` +[...places].sort())
// // show that your array is still in original order print by printing it.
// console.log(`orignal `+ places);
// // print your array in reverse alphabatical order without changing the order of the original list
// console.log(`copy `+[...places].reverse());
// // show that your array is still in its original order by printing it again.
// console.log(`orignal `+ places);
// //reverse the order of your list . print the array to show that its order has changed.
// console.log(`original `+places.reverse());
// // Reverse the order of your list again . print the list to show its back to its original order.
// console.log(`original `+places.reverse());
// // sort your array so its store in Alphabatical order. Print the array to show that its order has been changed.
// console.log(`original `+places.sort());
// // sort to change your array so its stored in reverse alphabatically order. print the list to show that its order has changed.
// console.log(`original `+places.sort().reverse())







