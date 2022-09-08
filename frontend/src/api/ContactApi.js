import axios from 'axios';

const baseURL = "http://localhost:3000/api/contacts";

class ContactApi {
    createContact(data) {
        return axios.post(baseURL, data);
    }

    getAllContacts() {
        return axios.get(baseURL);
    }

    deleteContact(id) {
        return axios.delete(baseURL + "/" + id);
    }
}

export default new ContactApi();

// useEffect(() => {
//     axios.get(baseURL).then((response) => {
//         setContacts(response.data);
//     });
// }, []);

// const testApi = () => {
//     if (!post) return null;
//     console.log(post.length);
//     return (
//         <div>
//           <h1>{post.title}</h1>
//           <p>{post.body}</p>
//         </div>
//     );
// }