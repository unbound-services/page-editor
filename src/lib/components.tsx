import { Fragment } from "preact";
import { useContext, useEffect } from "preact/hooks";
import { StringInput, SelectInput, StreamContextType } from "./index";
import { useEditorContext } from "./modules/input-slot/input-slot-hooks";

const StreamButton = useEditorContext(
  ({ sectionName, setButtonRender, editorContext }) => {
    let stream = editorContext.streams;

    const onClick = () => {
      stream.getStream("test-stream", (val) => {
        editorContext.setState({
          ...editorContext.editorState,
          [sectionName]: val[0].src,
        });
      });
    };

    useEffect(() => {
      setButtonRender(() => {
        return <button onClick={onClick}>Select From Stream</button>;
      });
      console.log("called set button render");
    }, []);

    return null;
  }
);

export const ProductPageHeroImage = (props) => {
  const {
    imageUrl = "",
    imageHeadingText = "",
    imageText = "",
    imageAlign = "center",
    textBelow = false,
    targetImage,
    setButtonRender,
    editing = true,
  } = props;

  let displayVal: any = null;
  if (targetImage) {
    displayVal = <img src={targetImage} />;
  } else {
    displayVal = <span style={{ padding: 20 }}>Image Placeholder</span>;
  }

  if (editing) {
    return (
      <Fragment>
        <StreamButton
          {...props}
          sectionName="targetImage"
          setButtonRender={setButtonRender}
        />
        {displayVal}
        <StringInput
          sectionName="imageUrl"
          value={imageUrl}
          label="Image URL"
        />
        <StringInput
          sectionName="imageHeadingText"
          value={imageHeadingText}
          label="Heading Text"
        />
        <StringInput
          sectionName="imageText"
          value={imageText}
          label="Image Text"
        />
        <SelectInput
          sectionName="imageAlign"
          current={imageAlign}
          label="Position from"
          options={{
            Top: "top",
            Center: "center",
            Bottom: "bottom",
          }}
        />
        <div className="product-page__hero">
          <img
            className={`product-page__hero__image product-page__hero__image--align-${imageAlign}`}
            src={imageUrl}
          />
          <div
            className={`product-page__hero__text-box${
              textBelow ? " product-page__hero__text-box--below-hero" : ""
            }`}>
            <div className="product-page__hero__heading">
              {imageHeadingText}
            </div>
            <div className="product-page__hero__text">{imageText}</div>
          </div>
        </div>
      </Fragment>
    );
  } else {
    return (
      <div className="product-page__hero">
        <img
          className={`product-page__hero__image product-page__hero__image--align-${imageAlign}`}
          src={imageUrl}
        />
        <div
          className={`product-page__hero__text-box${
            textBelow ? " product-page__hero__text-box--below-hero" : ""
          }`}>
          <div className="product-page__hero__heading">{imageHeadingText}</div>
          <div className="product-page__hero__text">{imageText}</div>
        </div>
      </div>
    );
  }
};
