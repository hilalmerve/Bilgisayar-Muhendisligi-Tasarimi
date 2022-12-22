var Product = require('../models/product');

const puppeteer = require('puppeteer');


module.exports.home = function(req, res) {
    res.render('home');
}
 //Urun Kodu Ornek: 382953334


module.exports.homePost = function(req, res) {
                                                                                                                               
    async function run() {
        
        var input = req.body.code;
        var link = 'https://www.google.com.tr/search?q=trendyol+' + input;                                                                                   //google üzerindeki sayfalar açıldı.
        console.log(link);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(link);
    
        const links = await page.evaluate(() => Array.from(document.querySelectorAll('.eqAnXb'), (e) => ({
            link2: e.querySelector('.yuRUbf a').href,
        }))
        );
        
        async function run1() {
            console.log(links[0].link2);
            const browser2 = await puppeteer.launch();
            const page2 = await browser2.newPage();
            await page2.goto(links[0].link2);
        
            const links2 = await page2.evaluate(() => Array.from(document.querySelectorAll('.product-detail-container'), (e) => ({
                productName: e.querySelector('.pr-new-br').innerText,
                productPrice: e.querySelector('.prc-dsc').innerText,
                productImgSrc: e.querySelector('.base-product-image img').getAttribute('src'),
            }))
            );

            var inputValue = req.body.button;
            if (inputValue == "Show") {
                console.log(req.body);
                 
                 res.render('home', {name: links2[0].productName,
                    price: links2[0].productPrice,
                    src: links2[0].productImgSrc
                });
            } 
            else if (inputValue == "Save") {
        
                var newProduct = new Product( {
                    productId: req.body.code,
                    name: links2[0].productName,
                    price: links2[0].productPrice,
                    src: links2[0].productImgSrc
                });
                newProduct.save(function(err) {
        
                });
            }
            await browser.close();
        }
        run1();
    }
    run();
}
//Kullanıcı istekleri request objesinin içine yerleştirilir.express objesinin bir modülü var. req objesini tarıyor ve parse ediyor. Bizim işimize yarayacak olan kısmı getiriyor.
//req objeleri parse edilebilmesiiçin body parser modülü yüklenmeli
// console.log (newProduct);
//var path = require('path');
//console.log(links);
//res.render('home', {username: req.body.username});
     //console.log(links2);
            /*console.log(links2[0].urun);
            const product = {
                productName: links2[0].productName,
                productPrice: links2[0].productPrice,
                productImgSrc: links2[0].productImgSrc
            }*/