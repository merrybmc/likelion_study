const xhrObj = new XMLHttpRequest();
xhrObj.open('GET', 'URL');
xhrObj.onreadystatechange = () => {
  if (xhrObj.readyState === 4 && xhrObj.status === 200) {
  }
};
