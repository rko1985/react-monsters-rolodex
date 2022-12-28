
import './search-box.styles.css'

interface ISearchPoxProps {
    className: string;
    placeholder?: string;    
}

interface ISearchPoxProps {
    onChangeHandler: (a: string) => void
}

const SearchBox = ({className, placeholder, onChangeHandler}: ISearchPoxProps) => (
    <input 
    className={`search-box ${className}`}
    type='search' 
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e)}/>
);

export default SearchBox;