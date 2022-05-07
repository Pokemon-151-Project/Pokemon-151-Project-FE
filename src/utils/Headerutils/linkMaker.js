// Generates links more DRYly
const linkMaker = (linksArray) => {
  return linksArray.map((item) => {
    const { href, text } = item;
    return (
      <a target="_blank" rel="noreferrer" href={href} key={text}>
        {text}
      </a>
    );
  });
};

export default linkMaker;
