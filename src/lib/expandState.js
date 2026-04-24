let pendingRect = null;

export const setPendingRect = (r) => {
    pendingRect = { top: r.top, left: r.left, width: r.width, height: r.height };
};

export const consumePendingRect = () => {
    const r = pendingRect;
    pendingRect = null;
    return r;
};
