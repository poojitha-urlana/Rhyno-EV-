#include<stdio.h>
#include<string.h>
struct student
{
    int rollnumber;
    float cgpa;
    char name[10];
}a,b={12,9.3,"Rahul"};
struct student c={14,9.9,"kesav"};
int manin()
{
    struct student four;
    a.rollnumber=15;
 a.cgpa=9.5;
    stcpy(four.name,"datta");
    printf("enter name four student");
    scanf("%s",&four.name);
    printf("enter roll number of four student");
    scanf("%d",&four.rollnumber);
    printf("enter cgpa of four student");
    scanf("%f",&four.cgpa);
    printf("name of four student is %s",four.name);
    printf("roll number of four student is %d",four.rollnumber);
    printf("cgpa of four student is %f",four.cgpa);
    printf("name of second student is %s",b.name);
    printf("roll number of second student is %d",b.rollnumber);
    printf("cgpa of second student is %f",b.cgpa);
    printf("name of third student is %s",c.name);
    printf("roll number of third student is %d",c.rollnumber);
    printf("cgpa of third student is %f",c.cgpa);
    printf("name of first student is %s",a.name);
    printf("roll number of first student is %d",a.rollnumber);
    printf("cgpa of first student is %f",a.cgpa);
    return 0;

}