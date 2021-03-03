export const errorHandler = (response) => {
    if (!response.ok) {
      return { error: response.statusText, errorCode: response.status };
    }
    return response.json();
  }; 