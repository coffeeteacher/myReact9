// https://www.npmjs.com/package/react-masonry-css

import Masonry from 'react-masonry-css'

import "../css/masonry.css"

const App = () => {
    var photos = [
        { id: 1, src: './images2/01.jpg' },
        { id: 2, src: './images2/02.jpg' },
        { id: 3, src: './images2/03.jpg' },
        { id: 4, src: './images2/04.jpg' },
        { id: 5, src: './images2/05.jpg' },
    ];
    // rwd 斷點設定
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };
    return (

        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >

            {/* array of JSX items */}
            {
                photos.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.src} alt="" />
                        </div>
                    )
                })
            }
        </Masonry>
    )
}

export default App