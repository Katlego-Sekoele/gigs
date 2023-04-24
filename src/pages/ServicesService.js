const API_URL = "https://strapi-jzff.onrender.com/api"

export async function getServices(){
    let apiKey = process.env.NEXT_PUBLIC_API_TOKEN_PROD
    let endPoint = API_URL + "/services?populate=*"

    let response = await fetch(endPoint, {
        method: 'get',
        headers: new Headers({
            "Authorization": `Bearer ${apiKey}`
        })
    })
    const array = (await response.json()).data.map(entry => {
        return {
            ...entry.attributes,
            id: entry.id
        }
    });

    return array;

}

export async function getAllServiceIds() {
    const services = await getServices()

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return await services.map((service) => {
        return {
            params: {
                id: service.id.toString(),
            },
        };
    });
}

export async function getServiceById(id){
    let apiKey = process.env.NEXT_PUBLIC_API_TOKEN_PROD
    let endPoint = `${API_URL}/services/${id}?populate=*`

    let response = await fetch(endPoint, {
        method: 'get',
        headers: new Headers({
            "Authorization": `Bearer ${apiKey}`
        })
    })
    let service = (await response.json()).data
    return {
        ...(service.attributes),
        id: service.id
    };

}

export function getServiceProviderFromService(service){
    return service.service_provider.data.attributes
}

export default () => {}