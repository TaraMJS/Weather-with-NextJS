export default function Heading({ size = "1", content, style }) {
    const HeadingType = `h${size}`;
    return <HeadingType className={style}>{content}</HeadingType>;
  }