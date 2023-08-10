BEGIN
    INPUT A,B,C

        IF(A > B)
                IF(A > C) 
                        DISPLAY A + " is max number"
                ELSE 
                        DISPLAY C + " is max number"
        ELSE 
                IF(B > C)
                        DISPLAY B + " is max number"
                ELSE
                        DISPLAY C + " is max number"
END

BEGIN
    INPUT A,B,C
        MAX = A
        IF(MAX > B)
                IF(C > MAX) 
                        MAX = C
        ELSE 
                IF(B > C)
                        MAX = B
                ELSE
                        MAX = C
    DISPLAY MAX + " is max number"
END


BEGIN
    INPUT A,B,C
        MAX = A
        IF(A > B && A > C) 
            MAX = A
        ELSE 
            IF(B > C) 
                MAX =B
            ELSE 
                MAX =C
                
    DISPLAY MAX + " is max number"
END

--> PSEUDO CODE 