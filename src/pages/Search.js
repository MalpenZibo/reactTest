import React, { useState } from 'react';

function Search() {
    const loremIpsum = `Ipsum fugiat deserunt reprehenderit eiusmod pariatur culpa adipisicing tempor. Elit id aute cillum aliquip irure esse minim in sint reprehenderit laboris. Laboris ad cillum sit aliquip veniam ipsum culpa mollit et magna ut.

Cupidatat quis veniam sint adipisicing laborum commodo laborum aliqua enim amet. Consectetur consequat laborum ea commodo. Laboris fugiat non excepteur magna dolore.

Excepteur Lorem exercitation deserunt eu proident ipsum sit in amet. Ut sunt sunt eu do nostrud adipisicing. Nisi sint do id commodo sint deserunt Lorem dolor ipsum enim nulla qui aliqua.

Pariatur dolor commodo sit cupidatat. Labore officia consectetur dolor sint voluptate deserunt qui aliqua ea. Cillum id sit reprehenderit eiusmod eiusmod Lorem id ullamco. Occaecat reprehenderit in consequat est. Irure Lorem nostrud nulla eu eu incididunt adipisicing incididunt incididunt proident est ea. Esse aute enim sit magna dolore deserunt. In id tempor exercitation sint laboris minim voluptate ea.

Ea voluptate sint proident irure consectetur ullamco elit proident duis occaecat ipsum. Dolore duis adipisicing dolore cillum ad ad officia ea cupidatat id laboris et. Reprehenderit cillum nisi aliquip laborum est cupidatat do et ex irure Lorem ipsum ullamco deserunt.

Sit veniam in occaecat do reprehenderit fugiat qui. Culpa occaecat culpa culpa tempor aute ex culpa tempor in cillum exercitation ex sint. In sint veniam officia pariatur cillum nulla ullamco.

Cillum enim commodo tempor est cillum nulla. Laborum magna ea exercitation pariatur irure sit ut ipsum deserunt qui culpa amet irure. Culpa commodo exercitation voluptate cupidatat non id occaecat eu incididunt occaecat culpa.

Mollit non elit pariatur non aliquip ipsum ut ut nisi qui mollit sunt enim. Sint voluptate irure in deserunt adipisicing fugiat. Tempor commodo ex aliquip consequat ex velit ad. Consectetur exercitation esse mollit esse consequat ex anim commodo ipsum non ipsum.

Amet commodo qui nulla voluptate adipisicing ad commodo cupidatat nulla quis dolore Lorem. Commodo nisi laborum culpa pariatur labore sit minim cillum est dolor quis eu officia. Cillum reprehenderit dolor in ad cupidatat enim exercitation consectetur laboris nulla ipsum id. Excepteur elit nostrud fugiat non. Cillum laborum enim culpa aliqua pariatur ipsum. Occaecat anim est commodo velit. Proident et voluptate eu eu ex reprehenderit qui velit.

Eu ex occaecat anim esse. Laboris esse enim veniam ullamco ut elit fugiat est irure irure officia. Ullamco cillum duis commodo ullamco aliqua deserunt do duis Lorem mollit do ut. Occaecat ullamco qui officia mollit. In mollit et dolor quis nisi. Dolor minim elit enim culpa consequat eiusmod eu enim labore labore consectetur sit enim.`

    // Getter and setter for selection state
    const [text, setText] = useState({ __html: loremIpsum })

    let timer;

    const handleSearch = (event) => {
        // Clears running timer and starts a new one each time the user types
        clearTimeout(timer);

        let search = event.target.value

        timer = setTimeout(() => {
            let newText = ""
            let initIndex = 0

            if(search !== "") {
                let indexOfFirst = loremIpsum.indexOf(search)
                while(indexOfFirst !== -1) {
    
                    newText += loremIpsum.substring(initIndex, indexOfFirst)
                    newText += "<strong>" + loremIpsum.substring(indexOfFirst, indexOfFirst + search.length) + "</strong>"
    
                    initIndex = indexOfFirst + search.length
                    indexOfFirst = loremIpsum.indexOf(search, indexOfFirst + 1)
                }
            }

            newText += loremIpsum.substring(initIndex, loremIpsum.length)

            setText({ __html: newText })
        }, 500)
    }

    return (
        <div>
            <div className="form-group">
                <input type="text" placeholder="Search" id="paperInputs1" onChange={handleSearch} />
            </div>
            <p dangerouslySetInnerHTML={text}></p>
        </div>
    );
}

export default Search;