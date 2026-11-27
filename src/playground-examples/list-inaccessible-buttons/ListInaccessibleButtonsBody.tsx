export const ListInaccessibleButtonsBody = () => {
  return (
    <>
      <div className="marginBottom2">
        <p>
          This list has buttons that are intentionally not accessible for screen
          readers.
        </p>
        <p>Cycling through buttons will only read "Delete".</p>
      </div>

      <ul className="cardList">
        <li className="card displayFlex flexDirectionRow justifyContentSpaceBetween alignItemsCenter gap2">
          <div>
            <h2>Item 1</h2>
            <p>Item 1 description</p>
          </div>
          <button>Delete</button>
        </li>
        <li className="card displayFlex flexDirectionRow justifyContentSpaceBetween alignItemsCenter gap2">
          <div>
            <h2>Item 2</h2>
            <p>Item 2 description</p>
          </div>
          <button>Delete</button>
        </li>
        <li className="card displayFlex flexDirectionRow justifyContentSpaceBetween alignItemsCenter gap2">
          <div>
            <h2>Item 3</h2>
            <p>Item 3 description</p>
          </div>
          <button>Delete</button>
        </li>
      </ul>
    </>
  );
};
