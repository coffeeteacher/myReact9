import axios from "axios";
import { useState } from "react";


const App = () => {
    // 檢測是否連上api
    // https://api.unsplash.com/search/photos/?client_id=YOUR_ACCESS_KEY

    const api = "https://api.unsplash.com/search/photos/";
    const accessKey = "rj_ilIh0pxoVMOnNA6YCQ4u8yUe51PGqELynwnr8k-o"
    const [filterString, setFilterString] = useState('dog');

    // 建立非同步方法，取得遠端資料
    const getPhotos = async () => {
        // console.log(`${api}?client_id=${accessKey}&query=${filterString}`)
        // 發出請求給遠端 api，傳回結果
        const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`)
        // 全部資料
        console.log(result);
    }

    getPhotos();

    return (
        <div>App</div>
    )
}

export default App