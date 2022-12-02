const DOG_API = 'https://dog.ceo/api/breed/hound/images/random'

const getDogImage = async () => {
  const image = await fetch(DOG_API).then(response => response.json())
  const url = image.message
  return url
}

onmessage = async function(event) {
  const data = new Array(parseInt(event.data)).fill(0).map((item, index) => index + 1);
  for (let i of data) {
    postMessage(await getDogImage())
  }
}