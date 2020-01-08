let rerenderEntiretree = () => {
    console.log('state changed');
}


let state = {
    NavbarPage : {
        Friends : [
            { id: 1, name: 'Andrey' },
            { id: 2, name: 'Anna' },
            { id: 3, name: 'Viktor' },
           
           
        ]
    },
    ProfilePage : {
        PostData : [
            { id: 1, message: 'Hi,how are you?', like: 15 },
            { id: 2, message: 'It\'s my first post', like: 35 },
            { id: 3, message: 'It\'s my first post', like: 35 },
            { id: 4, message: 'It\'s my first post', like: 35 },
        ],
        newPostText: "it-kamasutra.com"
    },
    DialogsPage : {
        DialogsData : [
            { id: 1, name: 'Andrey' },
            { id: 2, name: 'Victor' },
            { id: 3, name: 'Olga' },
            { id: 4, name: 'Anna' },
            { id: 5, name: 'Egor' },
            { id: 6, name: 'Egor' },
        ],
        MessageData : [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'It\'s fine' },
            { id: 4, message: 'Yo!' },
            { id: 5, message: 'Yo!' },
            { id: 6, message: 'Yo!' },
        ]

    }

}

export const addPost = () => {
    let newPost = {
        id : 5,
        message : state.ProfilePage.newPostText,
        like : 0
    };
    state.ProfilePage.PostData.push(newPost);
    state.ProfilePage.newPostText = '';
    rerenderEntiretree(state);
}


export const updatePostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    rerenderEntiretree(state);
}

export const subscribe = (observer) => {
    rerenderEntiretree = observer;
}

export default state;