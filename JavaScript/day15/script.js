// const products= [
//     {
//         name:"키보드",
//         price:50000,
//         inventory: 6
//     },
//     {
//         name:"마우스",
//         price:30000,
//         inventory: 3
//     },
//     {
//         name:"모니터",
//         price:250000,
//         inventory: 12
//     }
// ];

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i].name);
// };

// products.forEach(function(product) {
//     console.log(product.name);
// });

// products.forEach((nedan) => {
//     console.log(nedan.price);
// });


// const product_2 = products.map((product) => {
//     return {
//         name: product.name,
//         price: product.price * 0.9,
//         inventory: product.inventory -1
//     };
// });
// console.log(product_2);

// //filter
// const result = products.filter((product) => {
//     return product.price <= 100000;
// });
// console.log(result);

// //map
// const result2 = products.map((product) => {
//     return product.price * 0.9;
// });
// console.log(result2);

// //some
// const return_some = products.some((product) => {
//     return product.price <= 100000;
// });
// console.log(return_some);

// 종합 실습
const products2 = [
    {
    name: "키보드",
    price: 50000,
    inventory: 5,
    isSoldout: false
    },
    {
    name: "마우스",
    price: 30000,
    inventory: 8,
    isSoldout: false
    },
    {
    name: "모니터",
    price: 250000,
    inventory: 15,
    isSoldout: false
    },
    {
    name: "노트북",
    price: 1000000,
    inventory: 0,
    isSoldout: true
    }
];

// 상품 이름만 출력
const return_forEach = products2.forEach((product_4) => {
    console.log(product_4);
});

// 가격을 10% 할인 map
const return_map = products2.map((product_5)=> {
    return product_5.price * 0.9;
});
console.log(return_map);

// 10만원 이하 상품 필터링
const return_filter = products2.filter((product_6) => {
    return product_6.price <= 100000;
})

// 첫 번째 10만원 이상 상품 
const return_find = products2.find((product_3) => {
    return product_3.price >= 100000;
});
console.log(return_find);

//100만원 이상 상품이 있는지
const return_some2 = products2.some((product_2)=> {
    return product_2.price >= 1000000;
});
console.log(return_some2);

// 모든 상품이 1만원 이상인지
const return_every = products2.every((product_3) => {
    return product_3.price <= 10000;
});
console.log(return_every);

// 모든 상품 금액의 합
const return_reduce = products2.reduce((acc, product_7) => {
    return acc + product_7.price;
}, 0);
console.log("모든 상품 금액의 합")
console.log(return_reduce);

// 모든 상품의 총매출 (인벤토리 * 가격)
console.log("모든 상품 총 매출")
const return_reduce3 = products2.reduce((acc, product_7) => {
    return acc + (product_7.price * product_7.inventory);
}, 0);
console.log(return_reduce3);

// 제품명을 제품명 별로 하나씩 더해서 세어보자
const result_reduce2 = products2.reduce((acc, product_8) => {
    if (acc[product_8.name]){
        acc[product_8.name] = acc[product_8.name] + 1;
    } else {
        acc[product_8.name] = 1;
    }
    return acc;
}, {});
console.log(result_reduce2);

console.log("------- 과제 -------")
// 1. `forEach()`를 이용하여 모든 상품 이름을 출력하세요.
const r_forEach = products2.forEach((p1) => {
    console.log(p1.name);
});

// 2. `map()`을 이용하여 상품 이름만 저장된 새로운 배열을 만드세요.
const r_map = products2.map((p2) => {
    return p2.name;
});
console.log(r_map);

// 3. `filter()`를 이용하여 **재고(stock)가 1개 이상인 상품만** 새로운 배열로 만드세요.
const r_filter = products2.filter((p3) => {
    return p3.inventory >= 7;
})
console.log(r_filter);

// 4. `find()`를 이용하여 **가격이 100만원 이상인 첫 번째 상품**을 찾으세요.
const r_find = products2.find((p4) => {
    return p4.price >= 1000000;
})
console.log(r_find);

// 5. `some()`을 이용하여 **품절(stock이 0)인 상품이 있는지** 확인하세요.
const r_some = products2.some((p5) => {
    return p5.isSoldout == true;
})
console.log(r_some);

// 6. `every()`를 이용하여 **모든 상품의 가격이 1만원 이상인지** 확인하세요.
const r_every = products2.every((p6) => {
    return p6.price >= 10000;
})
console.log(r_every);

// 7. `reduce()`를 이용하여 **모든 상품 가격의 총합**을 계산하세요.
const r_reduce = products2.reduce((acc, p7) => {
    return acc + p7.price;
}, 0);
console.log(r_reduce);



