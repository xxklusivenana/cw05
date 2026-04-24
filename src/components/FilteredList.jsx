import React, { Component } from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

const produce = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Broccoli", type: "Vegetable" },
    { name: "Orange", type: "Fruit" },
    { name: "Spinach", type: "Vegetable" }
];

class FilteredList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            type: "All"
        };
    }

    onFilter = (eventKey) => {
        this.setState({ type: eventKey });
    }

    filterItem = (item) => {
        const matchesSearch = item.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase());

        const matchesType =
            this.state.type === "All" || item.type === this.state.type;

        return matchesSearch && matchesType;
    }

    render() {
        const filteredProduce = produce.filter(this.filterItem);

        return (
            <div className="filtered-container">
                <div className="controls">

                    <DropdownButton title="Filter" onSelect={this.onFilter}>
                        <MenuItem eventKey="All">All</MenuItem>
                        <MenuItem eventKey="Fruit">Fruit</MenuItem>
                        <MenuItem eventKey="Vegetable">Vegetables</MenuItem>
                    </DropdownButton>

                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                    />
                </div>

                <ul>
                    {filteredProduce.map((item, index) => (
                        <li key={index}>
                            {item.name} ({item.type})
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FilteredList;