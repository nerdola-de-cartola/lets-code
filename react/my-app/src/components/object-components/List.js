import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [
                { id: 1, name: 'item1', complete: false },
                { id: 2, name: 'item2', complete: false },
                { id: 3, name: 'item3', complete: true },
                { id: 4, name: 'item4', complete: false }
            ]
        }
    }

    render() {

        return (
            <>
                <ul>
                    {React.Children.map(this.props.children, child => child.type == Item ? child : null)}
                    {this.state.items.map((item) => (
                        <Item key={item.id} complete={item.complete}>
                            {item.name}
                        </Item>
                    ))}
                </ul>
            </>
        )
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const textDecoration = this.props.complete ? 'line-through' : 'none'
        return (
            <>
                <li data-id={this.props.id} style={{ textDecoration }}>
                    {this.props.children}
                </li>
            </>
        )
    }
}

export { List, Item };