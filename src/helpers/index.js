
export const getStarted = async () => {
    const a = await fetch('http://localhost:4000/user/list');
    console.log(a)
};

// getStarted();