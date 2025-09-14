import { useState } from "react";
import "../../styles/common.css";
import { getPostListService, getPostSearchService } from "../../services/postService";

const SearchBox = ({ onListSet, type }) => {
    const [keyword, setKeyword] = useState("");

    const onPostSearch = (keyword) => {
        getPostSearchService(keyword)
            .then(response => {
                if (response.length === 0) {
                    onListSet([]);
                    return;
                }
                onListSet(response);
            })
            .catch(err => console.error("Error load forum data:", err));
    }

    const onGetPostList = () => {
        getPostListService()
            .then(response => onListSet(response))
            .catch(err => console.error("Error load all post data:", err));
    }

    const handleInputSearch = async (e) => {
        e.preventDefault();
        if (keyword.trim() === "") {
            onGetPostList();
            return;
        }
        switch (type) {
            case "post":
                onPostSearch(keyword);
                break;
            case "user":
                // Implement user search logic here
                break;
            default:
                console.error("Unknown search type:", type);
        }
    }

    return (
        <div className="search-box d-flex flex-row p-1 justify-content-between mb-4 border">
            <input
                type="text"
                placeholder="Input something..."
                className="form-control border-0 h-100 me-1"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="mainBtn border-1 px-3"
                onClick={handleInputSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchBox;