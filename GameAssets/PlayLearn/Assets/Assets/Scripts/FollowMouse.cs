using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FollowMouse : MonoBehaviour
{

    public float speed = 5f;
    private Transform m_transform;
    Vector2 Cursor = 
    Camera.main.ScreenToWorldPoint(Input.mousePosition);
    
    // Start is called before the first frame update
    void Start()
    {
        m_transform = this.transform;
    }

    private void lookAtMouse(){
        Vector2 direction = Cursor - m_transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        lookAtMouse()
    
        transform.position = 
        Vector2.MoveTowards(transform.position, Cursor, speed *  Time.deltaTime);
        
    }
}
