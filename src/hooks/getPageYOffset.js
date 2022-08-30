const getPageYOffset = () => {
    const isClient = typeof window === 'object';

    return isClient ? window.pageYOffset : undefined;
}

export default getPageYOffset;