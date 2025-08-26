import $ from 'jquery'
import '../css/app0826c.css'
import { useEffect } from 'react'
// import svg1 from '../assets/react.svg'
const App = () => {
    // $(function () {        
    //     // 現在的寫法
    //     $('a:has(.ttpShow)').on('mouseover', function (e) {
    //         $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
    //         $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
    //     }).on('mousemove', function (e) {
    //         $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' });
    //     }).on('mouseout', function () {
    //         $('#ttpPanel').remove();
    //     })

    //     // 過時的寫法
    //     // has=>檢查是否有指定的名稱
    //     // $('a:has(.ttpShow)').mouseover(function (e) {
    //     //     $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
    //     //     $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
    //     // }).mousemove(function (e) {
    //     //     $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' });
    //     // }).mouseout(function () {
    //     //     $('#ttpPanel').remove();
    //     // })
    // })

    useEffect(() => {
        console.log(2);
        $('a:has(.ttpShow)').on('mouseover', function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
            $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
        }).on('mousemove', function (e) {
            $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
        }).on('mouseout', function () {
            $('#ttpPanel').remove();
        })

        // has=>檢查是否有指定的名稱
        // $('a:has(.ttpShow)').mouseover(function (e) {
        //     $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
        //     $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
        // }).mousemove(function (e) {
        //     $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' });
        // }).mouseout(function () {
        //     $('#ttpPanel').remove();
        // })
    }, [])

    return (
        <div className="wrap">
            <h1>Tooltip</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi harum voluptates distinctio quod,
                nihil ullam, optio facere quae labore, iure sunt nobis rerum blanditiis! Deserunt obcaecati temporibus
                mollitia,
                <a href="#">
                    doloribus
                    <span className="ttpShow">doloribus內容說明。。。</span>
                </a>, reiciendis explicabo delectus alias repellendus aspernatur eveniet aliquid corrupti,
                similique accusantium ab a iure ea. Porro, illo! Laboriosam id odio perferendis fugiat nisi modi, nesciunt
                sequi repellat mollitia iste tenetur dolores quisquam possimus eveniet alias saepe. Exercitationem cum unde
                qui facilis. Omnis placeat odio atque! Quasi corrupti dolorem maiores obcaecati accusamus consequuntur saepe
                reprehenderit aspernatur aliquid culpa quibusdam, doloribus molestiae quisquam aut aliquam rerum rem
                voluptas nam ipsam facere est in dignissimos impedit natus? Repudiandae mollitia obcaecati nisi velit
                tempore, dolores suscipit pariatur sit odio blanditiis dolor. Fugit sed blanditiis repellendus labore
                beatae, animi veritatis iste nobis obcaecati. Illo praesentium veritatis placeat corporis accusamus
                molestiae beatae! Consequatur
                <a href="#">
                    voluptatibus
                    <span className="ttpShow">voluptatibus內容說明。。。</span>
                </a>
                sunt unde dignissimos doloremque minima aliquam deserunt ipsam
                laborum
                <a href="#">
                    {/* <img src={svg1} alt="" /> */}
                    <img src="./react.svg" alt="" />
                    <span className="ttpShow">圖片說明</span>
                </a>

                debitis voluptates ipsa reiciendis hic deleniti, quos saepe libero accusamus veniam modi maiores
                perferendis ea culpa? Inventore ullam voluptatibus veritatis ipsam saepe distinctio consectetur modi quam
                accusamus, repellat molestiae atque in nemo odit pariatur deleniti cum provident, enim neque quo tenetur.
                Architecto facilis id deserunt quis praesentium, soluta debitis officia facere natus. Eveniet nihil nostrum
                doloremque ullam dolores veniam, itaque sequi molestias nisi labore ipsam commodi quia, ducimus eius tenetur
                voluptate et quisquam, amet minus repellat quaerat corporis aperiam beatae error. Eum, incidunt? Consequatur
                dolore voluptate, aspernatur expedita qui praesentium officiis fugiat magnam molestias dignissimos non. Sit
                saepe reprehenderit incidunt error quasi. Quod aperiam itaque exercitationem dolorem repudiandae ex eum
                iure, quae amet ea non perferendis velit praesentium magni consequatur blanditiis nihil laboriosam doloribus
                libero eos, nostrum recusandae? Repudiandae ex, quia deserunt, quo quas excepturi ducimus ipsa accusantium
                provident nostrum mollitia vel deleniti. Illum ut similique eius dolor obcaecati totam et iusto numquam!
            </p>
        </div>
    )
}

export default App