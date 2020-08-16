import React from 'react';

class TableHeaderItem extends React.Component {
    render() {
        //const TABLE_TITLE = this.props.TITLE
        return (
            <li class="grid-block">
                {this.props.TITLE.map(item => (
                    <div class="grid-block__item">{item.title}</div>
                ))}
            </li>
        );
    }
}
export default TableHeaderItem;