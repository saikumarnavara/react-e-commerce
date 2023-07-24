export const SortTitle = (props) => {
    const string = props;
    const title = string?.slice(0, 18)
    return title + '...';
}

export const Styles = {
    wishlist: {
        position: 'absolute',
        right: '0px',
        top: '0px',
        color: 'red',
        cursor: 'pointer'
    }
}