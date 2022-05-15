
const Cats_ENDPOINT = 'https://6260d106f429c20deb95d050.mockapi.io/catNames'

class CatsApi {
    get = async () => {
        try {
            const resp = await fetch(Cats_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e){
            console.log('ERROR', e);
        }
    }

    put = async(cat) => {
        try {
            const resp = await fetch (`${Cats_ENDPOINT}/${cat._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cat)
            })
            return await resp.json()
        } catch (e) {
            console.log('ERROR', e);
        }
    }
} export const catsApi = new CatsApi();