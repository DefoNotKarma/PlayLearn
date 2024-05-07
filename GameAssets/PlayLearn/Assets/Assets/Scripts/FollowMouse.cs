using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FollowMouse : MonoBehaviour
{public float speed = 5f;

    // Start is called before the first frame update
    void Start()
    {

    }


    // Update is called once per frame
    void Update()
    {
        Vector2 Cursor = 
        Camera.main.ScreenToWorldPoint(Input.mousePosition);

        Vector2 direction = new Vector2(
            Cursor.x - transform.position.x,
            Cursor.y - transform.position.y
        );

        transform.up = direction;
    
        transform.position = 
        Vector2.MoveTowards(transform.position,
         Cursor, speed *  Time.deltaTime);
    }
}
