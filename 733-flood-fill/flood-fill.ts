function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
   const queue = [[sr, sc]];
   const originColor = image[sr][sc]
   while(queue.length > 0) {
    const item = queue.pop();
    if(image[item[0]] === undefined || image[item[0]][item[1]] === undefined) continue;
    if(image[item[0]][item[1]] === color) continue;
    image[item[0]][item[1]] = color; 

    if(image[item[0]+1] !== undefined && image[item[0]+1][item[1]] === originColor) {
        queue.push([item[0]+1, item[1]])
    }
    if(image[item[0]-1] !== undefined && image[item[0]-1][item[1]] === originColor) {
        queue.push([item[0]-1, item[1]])
    }
    if(image[item[0]][item[1] + 1]  !== undefined && image[item[0]][item[1] + 1] === originColor) {
        queue.push([item[0], item[1] + 1])
    }
    if(image[item[0]][item[1] - 1]  !== undefined && image[item[0]][item[1] - 1] === originColor) {
        queue.push([item[0], item[1] - 1])
    }
   }

   return image;

};