const url =
  "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300";

const getNumber = async function () {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const result = await response.json();
      return result.value;
    } else {
      return response.status;
    }
  } catch (error) {
    throw error;
  }
};

export default getNumber;
