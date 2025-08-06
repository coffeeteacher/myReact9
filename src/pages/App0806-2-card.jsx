
import Card from '../components/Card'
import '../css/app0806-1.css'
const App = () => {
    // 資料抽離
    // 物件資料
    const photos = {
        photo1: {
            imgURL: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww',
            title: '狗狗',
            desc: "可愛狗狗在玩耍",
            btnName: '圖片來源',
            btnURL: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww'
        },
        photo2: {
            imgURL: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
            title: '建築物',
            desc: '建築物作品',
            btnName: '圖片來源',
            btnURL: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D'
        },
        photo3: {
            imgURL: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww',
            title: '咖啡店',
            desc: '咖啡店一角',
            btnName: '圖片來源',
            btnURL: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww'
        }
    }

    // 建立陣列物件資料
    const arrPhotos = [
        {
            id:1,
            imgURL: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww',
            title: '狗狗',
            desc: "可愛狗狗在玩耍",
            btnName: '圖片來源',
            btnURL: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww'
        },
        {
            id:2,
            imgURL: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
            title: '建築物',
            desc: '建築物作品',
            btnName: '圖片來源',
            btnURL: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D'
        },
        {
            id:3,
            imgURL: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww',
            title: '咖啡店',
            desc: '咖啡店一角',
            btnName: '圖片來源',
            btnURL: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8fHww'
        },
        {
            id:4,
            imgURL: 'https://images.unsplash.com/photo-1752407828488-1c6fafa47c50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
            title: '房間',
            desc: '房間一角',
            btnName: '圖片來源',
            btnURL: 'https://images.unsplash.com/photo-1752407828488-1c6fafa47c50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
        }
    ]

    return (
        <>
            <div className="container">
                {
                    arrPhotos.map((photo) => {
                        return (
                            <Card
                                key={photo.id}
                                imgURL={photo.imgURL}
                                title={photo.title}
                                desc={photo.desc}
                                btnName={photo.btnName}
                                btnURL={photo.btnURL}
                            ></Card>
                        )
                    })
                }

            </div>
        </>
    )
}
export default App