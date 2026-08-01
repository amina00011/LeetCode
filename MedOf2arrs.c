
// traditionnel n+m et pas log(n+m)
double findMedianSortedArrayss(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    // if the new merged array contain an even number of elem
    // we use  the second methode to calc the median
    int s = nums1Size + nums2Size;
    int i = 0;
    int j = 0;
    int* nums3;
    int n ;
    for(n = 0 ; n < s/2 + 1 ; n++){
        if(nums1[i] > nums2[j]){
            nums3[n] = nums2[j];
            j++;
        }else{
            nums3[n] = nums1[i];
            i++;
        }
    }
    if((s% 2) == 0){
      return (double)(nums3[n]+nums3[n-1])/2;
    }

    return (double)nums3[n];
}

//the log(n+m) solution 

// we re gonna use the binary search 
// first we split one of thearray at half the other at the rest of the half of the total number of elements
// 1 , 2, 3 ,4 ,5  (5)    1, 2 ,9 , 10 , 11 , 12, 20 (6)
double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int total = (nums1Size + nums2Size )/2;
    int l = 0;
    int h = nums2Size - 1;
    int stop = 0;
    while(!stop){
        int m = (l + h)/2;
        if(nums1[m] < nums2[nums2Size- m]){
            l = m + 1;
        }else if(nums2[nums2Size - 1 - m] < nums1[m+1]){
            h = m - 1;
        }else{
            stop = 1;
        }
    }
    if((nums1Size + nums2Size) % 2 == 0){
        return (double)(max(nums1[l], nums2[nums2Size - 1 - l]) + min(nums1[l+1], nums2[nums2Size - l]))/2;
    }
    return (double)max(nums1[l], nums2[nums2Size - 1 - l]);
}
