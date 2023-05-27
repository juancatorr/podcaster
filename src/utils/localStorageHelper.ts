
export enum LocalStorageKeys {
  Podcasts = 'podcasts',
  Time = 'time',
}

const EXPIRATION_TIME = 24


const expiredTime = 1000 * 60 * 60 * EXPIRATION_TIME * 1; // 1

export const getValue = (key: LocalStorageKeys) : Array<object> => {
  const value = localStorage.getItem(key);
  return value && JSON.parse(value).data;
}

export const getStoreTime = (key: LocalStorageKeys) : string => {
  const value = localStorage.getItem(key);
  return value && JSON.parse(value).time;
}

export const setValue = (key: string, value: object) => {
  const now = new Date().getTime().toString();
  const objectToStore = {
    data: value,
    time: now,
  }
  localStorage.setItem(key, JSON.stringify(objectToStore));
}

export const isPodcastInLocalStorageValid = () : boolean => {

  const podcasts = getValue(LocalStorageKeys.Podcasts);

  if (!podcasts) {
    return false;
  }

  const timeStored = getStoreTime(LocalStorageKeys.Podcasts);
  const currentTime = new Date().getTime().toString();
  const elapsedTime = Number(currentTime) - Number(timeStored) ;


  if(Number(elapsedTime)>= Number(expiredTime) ){
    return false
  }

  return true
}