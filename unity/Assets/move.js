#pragma strict

var speed = 3.0;
var rotatespeed = 3.0;

function Start () {

}

function Update () {
var controller : CharacterController = GetComponent(CharacterController);

transform.Rotate(0, Input.GetAxis("Horizontal") * rotatespeed, 0);

var forward = transform.TransformDirection(Vector3.forward);
var curSpeed = speed * Input.GetAxis("Vertical");
controller.SimpleMove(forward * curSpeed);
}