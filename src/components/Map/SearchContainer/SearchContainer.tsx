import { ChangeEvent, MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addressActions } from "redux/address";
import { useSelector } from "react-redux";
import { foundAddressesSelector } from "redux/address/selectors";
import { IAddressNormalized } from "redux/address/normalizer";
import { List, ListItem, SearchInput, SearchWrapper } from "./styles";
import { useMap } from "react-leaflet";

const SearchContainer = ({ setPosition }: any) => {
  const map = useMap();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const addresses: IAddressNormalized[] = useSelector(foundAddressesSelector);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;

    setInputValue(value);
    dispatch(addressActions.getAddressRequest({ value }));

    if (!value.length) {
      dispatch(addressActions.resetAddress());
    }
  };

  const addressHandler = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const { address, lat, lon }: IAddressNormalized = addresses[+target.id];

    dispatch(addressActions.setAddress({ address, lat, lon }));
    setInputValue(address);

    setPosition([+lat, +lon]);
    map.flyTo([+lat, +lon], 17);
  };

  return (
    <SearchWrapper $visible={Boolean(addresses.length)}>
      <SearchInput
        onChange={searchHandler}
        placeholder="Укажите адрес"
        value={inputValue}
      />
      <List $visible={Boolean(addresses.length)}>
        {addresses.map(({ address }, index) => (
          <ListItem key={index} id={`${index}`} onClick={addressHandler}>
            {address}
          </ListItem>
        ))}
      </List>
    </SearchWrapper>
  );
};

export default SearchContainer;
